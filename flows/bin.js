/* eslint-env node */

import React from "react";
import { render, Workspace, requireComponent } from "workflow-react";

const { SplitV } = requireComponent("workflow-layout-tiled");
const { Emacs } = requireComponent("workflow-app-emacs");
const { Terminal } = requireComponent("workflow-apps-defaults");

/*
  NB this workflow requires the library workflow-react
  Run npm i workflow-react from your workflow homefolder
*/

// Docs: https://github.com/havardh/workflow/blob/master/packages/workflow-react/Readme.md

export const flow = render(
  <Workspace name={"bin"}>
    <SplitV percent={1}>
      <Emacs percent={0.8} file={"~/bin"} />
      <Terminal percent={0.2} cwd={"~/bin"} />
    </SplitV>
  </Workspace>
);
