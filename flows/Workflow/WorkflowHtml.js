/* eslint-env node */

import React from 'react';
import render, { Workspace, requireComponent } from 'workflow-react';

const { SplitV, SplitH } = requireComponent("workflow-layout-tiled");
const { Terminal, Browser } = requireComponent("workflow-apps-defaults");
const Atom = requireComponent("workflow-app-atom");


export default render(
  <Workspace name={'workflow-html'}>
    <SplitV percent={1}>
      <SplitH percent={0.9}>
        <Atom percent={0.5} file={"~/dev/workflow"} />
        <Browser percent={0.5} url={"http://localhost:8080"} />
      </SplitH>
      <Terminal 
        percent={0.1} 
        cwd={"~/dev/workflow/packages/workflow-web/"} 
        cmd={"echo 'yarn start'"}
      />
    </SplitV>
  </Workspace>,
);
