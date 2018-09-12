/* eslint-env node */

import React from "react";
import render, { Workspace, requireComponent } from "workflow-react";

const Terminal = requireComponent("workflow-app-terminal");

export default render(
  <Workspace name={"workflow-build"}>
    <Terminal percent={0.2} cwd={"~/dev/workflow"} />
  </Workspace>
);
