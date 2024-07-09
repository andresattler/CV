#!/usr/bin/env node

const fs = require("fs");

const chalk = require("chalk");
const marked = require("marked");
const TerminalRenderer = require("marked-terminal");

marked.setOptions({
  renderer: new TerminalRenderer({
    tab: 2,
  }),
});

console.log(
  chalk.red(`
  ░█▀▀▄░▒█▄░▒█░▒█▀▀▄░▒█▀▀▄░▒█▀▀▀░░░▒█▀▀▀█░█▀▀▄░▀▀█▀▀░▀▀█▀▀░▒█░░░░▒█▀▀▀░▒█▀▀▄
  ▒█▄▄█░▒█▒█▒█░▒█░▒█░▒█▄▄▀░▒█▀▀▀░░░░▀▀▀▄▄▒█▄▄█░░▒█░░░░▒█░░░▒█░░░░▒█▀▀▀░▒█▄▄▀
  ▒█░▒█░▒█░░▀█░▒█▄▄█░▒█░▒█░▒█▄▄▄░░░▒█▄▄▄█▒█░▒█░░▒█░░░░▒█░░░▒█▄▄█░▒█▄▄▄░▒█░▒█
`),
);

const workHistoryMd = fs.readFileSync("./src/work-history.md", "utf8");
const technicalToolSetMd = fs.readFileSync(
  "./src/technical-toolset.md",
  "utf8",
);

const renderSubHeader = (text) => {
  console.log(chalk.red.underline(text));
};

const renderMd = (markdown) => {
  console.log(marked(markdown));
};

renderSubHeader("About");
renderSubHeader("Work History:");
renderMd(workHistoryMd);
renderSubHeader("Technical Toolset");
renderMd(technicalToolSetMd);
