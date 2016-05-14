"use strict";

var COMPONENT_MAPPING = {
  "inspector": {
    label: "Inspector",
    components: ["Developer Tools: Inspector",
                 "Developer Tools: CSS Rules Inspector",
                 "Developer Tools: Computed Styles Inspector",
                 "Developer Tools: Font Inspector",
                 "Developer Tools: Animation Inspector",
                 "Developer Tools: Style Editor"]
  },
  "console": {
    label: "Web Console",
    components: ["Developer Tools: Console"]
  },
  "debugger": {
    label: "JS Debugger",
    components: ["Developer Tools: Debugger"]
  },
  "network": {
    label: "Network Monitor",
    components: ["Developer Tools: Netmonitor"]
  },
  "perf": {
    label: "Performance Tools",
    components: ["Developer Tools: Memory",
                 "Developer Tools: Performance Tools (Profiler/Timeline)"]
  },
  "jsonviewer": {
    label: "JSON Viewer",
    components: ["Developer Tools: JSON Viewer"]
  },
  "storage": {
    label: "Storage Inspector",
    components: ["Developer Tools: Storage Inspector"]
  },
  "dom": {
    label: "DOM Panel",
    components: ["Developer Tools: DOM"]
  },
  "responsive": {
    label: "Responsive Mode",
    components: ["Developer Tools: Responsive Design Mode"]
  },
  "aboutdebugging": {
    label: "about:debugging",
    components: ["Developer Tools: about:debugging"]
  },
  "gcli": {
    label: "Command Line",
    components: ["Developer Tools: Graphic Commandline and Toolbar"]
  },
  "scratchpad": {
    label: "Scratchpad",
    components: ["Developer Tools: Scratchpad"]
  },
  "audio": {
    label: "Web Audio Editor",
    components: ["Developer Tools: Web Audio Editor"]
  },
  "canvas": {
    label: "Canvas & WebGL",
    components: ["Developer Tools: Canvas Debugger",
                 "Developer Tools: WebGL Shader Editor"]
  },
  "webide": {
    label: "WebIDE",
    components: ["Developer Tools: WebIDE"]
  },
  "main": {
    label: "Shared, Framework, Untriaged",
    components: ["Developer Tools",
                 "Developer Tools: Framework",
                 "Developer Tools: Object Inspector",
                 "Developer Tools: Source Editor",
                 "Developer Tools: Shared Components"]
  },
};

/**
 * Get a list of bugzilla component names given a list of COMPONENT_MAPPING
 * keys.
 * @param {Array} keys A list of keys as found in the COMPONENT_MAPPING object.
 * If instead of an array, the special string "all" is passed, then all
 * components are returned.
 * @return {Array} A list of bugzilla component names for these keys.
 */
function getBugzillaComponents(keys) {
  if (!keys) {
    return [];
  }

  if (keys === "all") {
    keys = Object.keys(COMPONENT_MAPPING);
  }

  var components = [];
  for (var i = 0; i < keys.length; i++) {
    var component = COMPONENT_MAPPING[keys[i]];
    if (component) {
      components = components.concat(component.components);
    }
  }
  return components;
}
