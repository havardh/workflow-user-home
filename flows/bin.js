/* eslint-env node */

import React from 'react';
import render, { Workspace, Layouts, Apps } from 'workflow-react';

const { SplitV } = Layouts;
const { Emacs } = Apps.linux;
const { Terminal } = Apps.defaults;


/*
  NB this workflow requires the library workflow-react
  Run npm i workflow-react from your workflow homefolder
*/

// Docs: https://github.com/havardh/workflow/blob/master/packages/workflow-react/Readme.md

export default render(
  <Workspace name={'bin'}>
    <SplitV percent={1}>
      <Emacs percent={0.8} file={"~/bin"} />
      <Terminal percent={0.2} cwd={"~/bin"} />
    </SplitV>
  </Workspace>,
);
