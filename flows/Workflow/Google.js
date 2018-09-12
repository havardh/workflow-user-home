/* eslint-env node */

import React from 'react';
import render, { Workspace, requireComponent} from 'workflow-react';

const { SplitH } = requireComponent("workflow-layout-tiled");
const { Browser } = requireComponent("workflow-apps-defaults");
const Atom = requireComponent("workflow-app-atom");


/*
  NB this workflow requires the library workflow-react
  Run npm i workflow-react from your workflow homefolder
*/

// Docs: https://github.com/havardh/workflow/blob/master/packages/workflow-react/Readme.md

export default render(
  <Workspace name={'workflow-google'}>
    <SplitH>
      <Atom percent={0.5} file={"~/dev/workflow"} />
      <Browser percent={0.5} />
    </SplitH>
  </Workspace>,
);
