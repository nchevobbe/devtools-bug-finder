var aMonthAgo = new Date();
aMonthAgo.setDate(aMonthAgo.getDate() - 30);

async function fetchLast30daysPr(url) {
  const searchParams = new URLSearchParams();
  searchParams.set("state", "closed");
  searchParams.set("sort", "updated");
  searchParams.set("direction", "desc");

  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  const pageResult = await fetch(`${url}?${searchParams}`, {
    mode: "cors",
    method: "GET",
    headers: myHeaders
  })

  const link = pageResult.headers.get("Link");
  let nextPage;
  if (link && link.includes(`rel="next"`)) {
    let next = link.split(`, `).find(l => link.includes(`rel="next"`));
    nextPage = next.replace(/^</, "").replace(/>;.*$/, "");
  }

  const data = await pageResult.json();
  let tooOld = false;
  const prs = [];
  let currentIndex = 0;
  let pr = data[0];

  while (tooOld === false && pr) {
    if (pr.merged_at > aMonthAgo.toISOString()) {
      prs.push(pr);
      currentIndex++;
      pr = prs[currentIndex];
    } else {
      tooOld = true;
    }
  }

  if (tooOld === false && nextPage) {
    const nextPagePrs = await fetchLast30daysPr(nextPage);
    prs.push(...nextPagePrs);
  }

  return prs;
}

async function fetchGithub() {
  const repos = await fetch("https://api.github.com/orgs/devtools-html/repos").then(res => res.json());
  // const prUrl = Object.values(repos).map(repo => repo.pulls_url.replace("{/number}", ""));

  // const prs = await Promise.all(prUrl.map(fetchLast30daysPr));
  // return prs;
}

function fetchBugzilla() {
  var today = new Date();
  var toStr = formatBugzillaDate(today);

  today.setDate(today.getDate() - 30);
  var fromStr = formatBugzillaDate(today);

  var params = {
    // Search only devtools bugs.
    "product": "Firefox",
    "component": Object.values(COMPONENT_MAPPING)
      .reduce((acc, comp) => {
        acc.push(...comp.components);
        return acc;
      }, []),
    // Only bugs assigned to someone.
    "email1": "nobody@mozilla.org",
    "email1_type": "not_contains",
    "email1_assigned_to": "1",
    // Resolved or verified only.
    "bug_status": ["RESOLVED", "VERIFIED"],
    // Actually fixed.
    "resolution": "FIXED",
    // Include all these fields in the response.
    "include_fields": ["id", "assigned_to"],
    "chfield": "resolution",
    "chfieldfrom":"-30d",
    "chfieldvalue": "FIXED",
    // "resolution":"---",
    "chfieldto":"Now"
  };


  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(function ([param, value]) {
    if (Array.isArray(value)) {
      value.forEach(v => searchParams.append(param, v));
    } else {
      searchParams.append(param, value);
    }
  });

  const BUGZILLA_API_URL = "https://bugzilla.mozilla.org/rest/";
  const url = `${BUGZILLA_API_URL}bug?${searchParams}`;
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  return fetch(url, {
    mode: "cors",
    method: "GET",
    headers: myHeaders
  })
  .then((response) => response.json());
}

module.exports = {
  loadContributions: async (dispatch) => {
    try{
    const bugzilla = fetchBugzilla();
    const github = fetchGithub();
    const bzResults = await bugzilla;
    const ghResults = await github;

    const data = bzResults.bugs.reduce((acc, bug) => {
      const {name, real_name} = bug.assigned_to_detail;

      if (name !== "nobody@mozilla.org" && !STAFF.some(stf => name.includes(stf))) {
        acc[real_name] = (acc[real_name] || 0) + 1;
      }
      return acc;
    }, {})

    dispatch({
      type: "CONTRIBUTIONS_LOADED",
      data,
    });
    } catch(e) {
      console.error(e);
    }
  }
}