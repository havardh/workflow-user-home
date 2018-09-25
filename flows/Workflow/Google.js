/* eslint-env node */

import React from "react";
import { render, Workspace, requireComponent } from "workflow-react";

const { SplitH } = requireComponent("workflow-layout-tiled");
const { Browser } = requireComponent("workflow-apps-defaults");
const { Emacs } = requireComponent("workflow-app-emacs");

/*
  NB this workflow requires the library workflow-react
  Run npm i workflow-react from your workflow homefolder
*/

// Docs: https://github.com/havardh/workflow/blob/master/packages/workflow-react/Readme.md

export const flow = render(
  <Workspace name={"workflow-google"}>
    <SplitH>
      <Emacs percent={0.5} file={"~/dev/workflow"} />
      <Browser percent={0.5} />
    </SplitH>
  </Workspace>
);
