/* eslint-env node */

import React from 'react';
import render, { Workspace, Layouts, Apps } from 'workflow-react';

const { SplitV, SplitH } = Layouts;
const { Terminal, TextEditor } = Apps.defaults;

export default render(
  <Workspace name={'workflow'}>
    <SplitV percent={1.0}>
      <TextEditor percent={0.9} file={"~/dev/workflow"} />
      <Terminal percent={0.1} cwd={"~/dev/workflow"} />
    </SplitV>
  </Workspace>,
);
