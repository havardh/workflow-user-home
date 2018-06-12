/* eslint-env node */

import React from 'react';
import render, { Workspace, Layouts, Apps } from 'workflow-react';

const { SplitV, SplitH } = Layouts;
const { TextEditor, Browser } = Apps.defaults;
const { Atom } = Apps.linux;


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
