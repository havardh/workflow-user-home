/* eslint-env node */

import React from "react";
import { render, Workspace, requireComponent } from "workflow-react";

const { SplitV } = requireComponent("workflow-layout-tiled");
const { Terminal } = requireComponent("workflow-apps-defaults");
const { Emacs } = requireComponent("workflow-app-emacs");

export const flow = render(
  <Workspace name={"workflow-slides"}>
    <SplitV percent={1.0}>
      <Emacs percent={0.8} file={"~/dev/workflow-slides/flows/Slide-1.js"} />
      <Terminal percent={0.2} cwd={"~/dev/workflow-slides"} />
    </SplitV>
  </Workspace>
);
