/* eslint-env node */

import React from "react";
import render, { Workspace, requireComponent } from "workflow-react";

const { SplitV } = requireComponent("workflow-layout-tiled");
const { Terminal } = requireComponent("workflow-apps-defaults");
const Emacs = requireComponent("workflow-app-emacs");

export default render(
  <Workspace name={"yargs-test"}>
    <SplitV percent={1.0}>
      <Emacs percent={0.9} file={"~/dev/yargs-test"} />
      <Terminal percent={0.1} cwd={"~/dev/yargs-test"} />
    </SplitV>
  </Workspace>
);
