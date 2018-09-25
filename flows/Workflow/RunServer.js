/* eslint-env node */

import React from "react";
import { render, Workspace, requireComponent } from "workflow-react";

const { SplitV, SplitH } = requireComponent("workflow-layout-tiled");
const { Terminal } = requireComponent("workflow-apps-defaults");
const { Emacs, File } = requireComponent("workflow-app-emacs");

export const flow = render(
  <Workspace name={"workflow-server/run"}>
    <SplitV percent={1}>
      <Emacs>
        <SplitH>
          <File file={"~/dev/workflow/packages/workflow-server/src/index.js"} />
          <SplitV percent={1}>
            <File
              file={"~/dev/workflow/packages/workflow-home-example/stdout.log"}
            />
            <File
              file={"~/dev/workflow/packages/workflow-home-example/stderr.log"}
            />
          </SplitV>
        </SplitH>
      </Emacs>
      <Terminal percent={0.2} cwd={"~/dev/workflow/packages/workflow-server"} />
    </SplitV>
  </Workspace>
);
