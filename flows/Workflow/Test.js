/* eslint-env node */

import React from "react";
import { render, Workspace, requireComponent } from "workflow-react";

const { SplitV, SplitH } = requireComponent("workflow-layout-tiled");
const { TextEditor, Terminal } = requireComponent("workflow-apps-defaults");

function source(path) {
  if (path.includes("src")) {
    return path;
  } else {
    return path.replace("test/unit", "src").replace("_tests.js", ".js");
  }
}

function test(path) {
  if (path.includes("test/unit")) {
    return path;
  } else {
    return path.replace("src", "test/unit").replace(".js", "_tests.js");
  }
}

export const flow = render(
  <Workspace name={"workflow-test"} args="file">
    <SplitV percent={1}>
      <SplitH percent={0.8}>
        <TextEditor percent={0.5} file={({ file }) => source(file)} />
        <TextEditor percent={0.5} file={({ file }) => test(file)} />
      </SplitH>
      <Terminal
        percent={0.2}
        cwd={"~/dev/workflow"}
        cmd={({ file }) => `$SHELL -c 'yarn test --watch ${file} && $SHELL'`}
      />
    </SplitV>
  </Workspace>
);
