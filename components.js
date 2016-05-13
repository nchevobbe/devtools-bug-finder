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
  "storage": {
    label: "Storage Inspector",
    components: ["Developer Tools: Storage Inspector"]
  },
  "canvas": {
    label: "Canvas & WebGL",
    components: ["Developer Tools: Canvas Debugger",
                 "Developer Tools: WebGL Shader Editor"]
  },
  "gcli": {
    label: "Command Line",
    components: ["Developer Tools: Graphic Commandline and Toolbar"]
  },
  "responsive": {
    label: "Responsive Mode",
    components: ["Developer Tools: Responsive Mode"]
  },
  "scratchpad": {
    label: "Scratchpad",
    components: ["Developer Tools: Scratchpad"]
  },
  "audio": {
    label: "Web Audio Editor",
    components: ["Developer Tools: Web Audio Editor"]
  },
  "webide": {
    label: "WebIDE",
    components: ["Developer Tools: WebIDE"]
  },
  "jsonviewer": {
    label: "JSON Viewer",
    components: ["Developer Tools: JSON Viewer"]
  },
  "aboutdebugging": {
    label: "about:debugging",
    components: ["Developer Tools: about:debugging"]
  },
  "dom": {
    label: "DOM Panel",
    components: ["Developer Tools: DOM"]
  },
  "main": {
    label: "Shared, Framework, Untriaged",
    components: ["Developer Tools",
                 "Developer Tools: Framework",
                 "Developer Tools: Object Inspector",
                 "Developer Tools: Source Editor"]
  },
};
