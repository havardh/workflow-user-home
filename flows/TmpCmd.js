/* eslint-env node */

import React from 'react';
import render, { Workspace, Layouts, Apps } from 'workflow-react';

const { SplitV, SplitH } = Layouts;
const { TextEditor, Terminal } = Apps.defaults;

import tmp from "tmp";

const {name} = tmp.dirSync({keep: true});

export default render(
  <Workspace name={'tmp-script'}>
    <SplitV percent={1}>
      <TextEditor percent={0.3} file={name} />
      <Terminal 
        percent={0.3} 
        cwd={name} 
      />
    </SplitV>
  </Workspace>,
);
