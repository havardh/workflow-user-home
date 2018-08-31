/* eslint-env node */

import React from 'react';
import render, { Workspace, Layouts, Apps } from 'workflow-react';

const { SplitV, SplitH } = Layouts;
const { TextEditor, Terminal } = Apps.defaults;

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

export default render(
  <Workspace name={'workflow-test'} args="file">
    <SplitV percent={1}>
      <SplitH  percent={0.8}>
        <TextEditor percent={0.5} file={({file}) => source(file)} />
        <TextEditor percent={0.5} file={({file}) => test(file)} />
      </SplitH>
      <Terminal 
        percent={0.2} 
        cwd={"~/dev/workflow"} 
        cmd={"yarn test --watch "}
        args={[({file}) => test(file)]}
      />
    </SplitV>
  </Workspace>,
);
