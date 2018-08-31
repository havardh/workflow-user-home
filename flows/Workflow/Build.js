/* eslint-env node */

import React from 'react';
import render, { Workspace, Apps } from 'workflow-react';

const { Terminal } = Apps.defaults;


export default render(
  <Workspace name={'workflow-build'}>
    <Terminal 
      percent={0.2} 
      cwd={"~/dev/workflow"} 
    />
  </Workspace>,
);
