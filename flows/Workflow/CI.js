/* eslint-env node */

import React from 'react';
import render, { Workspace, requireComponent } from 'workflow-react';

const { SplitV } = requireComponent("workflow-layout-tiled");
const { Browser } = requireComponent("workflow-apps-defaults");

export default render(
  <Workspace name={'workflow-ci'}>
    <SplitV>
      <Browser percent={0.34} url="https://travis-ci.org/havardh/workflow" />
      <Browser percent={0.33} url="https://circleci.com/gh/havardh/workflow/tree/feat%2Flayout" />
      <Browser percent={0.33} url="https://ci.appveyor.com/project/havardh/workflow" />
    </SplitV>
  </Workspace>,
);
