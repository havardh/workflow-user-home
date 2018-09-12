/* eslint-env node */

import React from "react";
import render, { Workspace, requireComponent } from "workflow-react";

import { resolve } from "path";
import execa from "execa";
import nfzf from "node-fzf";

const { SplitV } = requireComponent("workflow-layout-tiled");
const { Terminal } = requireComponent("workflow-apps-defaults");
const Emacs = requireComponent("workflow-app-emacs");

const packageDir = "/home/havard/dev/workflow/packages/";

export default new Promise(resolve => {
  const { stdout } = execa.sync("find", [
    packageDir,
    "-maxdepth",
    "1",
    "-type",
    "d",
    "-printf",
    '"%f\n"'
  ]);

  const packages = stdout
    .toString()
    .split("\n")
    .filter(pkg => pkg !== '"packages/')
    .map(pkg => pkg.substring(2));

  const api = nfzf(packages, function(name) {
    resolve(
      render(
        <Workspace name={`workflow-package-${name}`}>
          <SplitV percent={1.0}>
            <Emacs percent={0.9} file={() => `${packageDir}/${name}`} />
            <Terminal percent={0.1} cwd={() => `${packageDir}/${name}`} />
          </SplitV>
        </Workspace>
      )
    );
  });
});
