/* eslint-env node */

import React from 'react';
import {render, Workspace, requireComponent } from 'workflow-react';

const { SplitV, SplitH } = requireComponent("workflow-layout-tiled");
const { TextEditor, Terminal } = requireComponent("workflow-apps-defaults");

import tmp from "tmp";

const {name} = tmp.dirSync({keep: true});

export const flow = render(
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
