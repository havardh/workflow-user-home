/* eslint-env node */

import React from "react";
import render, { Workspace, requireComponent } from "workflow-react";

const { SplitH } = requireComponent("workflow-layout-tiled");
const { TextEditor, Browser } = requireComponent("workflow-apps-defaults");

export default render(
  <Workspace name={"workflow-react-example"}>
    <SplitH percent={1}>
      <TextEditor percent={0.2} file={__filename} />
      <Browser
        percent={0.8}
        url={
          "https://github.com/havardh/workflow/tree/master/packages/workflow-cmd"
        }
      />
    </SplitH>
  </Workspace>
);
