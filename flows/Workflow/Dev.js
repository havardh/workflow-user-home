/* eslint-env node */

import React from "react";
import render, { Workspace, requireComponent } from "workflow-react";

const { SplitV } = requireComponent("workflow-layout-tiled");
const { Terminal } = requireComponent("workflow-apps-defaults");
const Emacs = requireComponent("workflow-app-emacs");

export default render(
  <Workspace name={"workflow"}>
    <SplitV percent={1.0}>
      <Emacs percent={0.9} file={"~/dev/workflow"} />
      <Terminal percent={0.1} cwd={"~/dev/workflow"} />
    </SplitV>
  </Workspace>
);
