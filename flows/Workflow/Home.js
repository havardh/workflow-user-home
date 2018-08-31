/* eslint-env node */

import React from "react";
import render, { Workspace, requireComponent } from "workflow-react";

const { SplitV } = requireComponent("workflow-layout-tiled");
const { TextEditor, Terminal } = requireComponent("workflow-apps-defaults");

export default render(
  <Workspace name={"workflow-home"}>
    <SplitV percent={0.9}>
      <TextEditor percent={0.8} file={"~/.workflow"} />
      <Terminal percent={0.2} cwd={"~/.workflow"} />
    </SplitV>
  </Workspace>
);
