/* eslint-env node */

import React from 'react';
import render, { Workspace, Layouts, Apps } from 'workflow-react';

const { SplitV } = requireComponent("workflow-layout-tiled");
const { TextEditor, Terminal, Browser } = requireComponent("workflow-apps-defaults");
const Emacs = requireComponent("workflow-app-emacs");

const url = "https://dev.to"

export default render(
  <Workspace name={'workflow-google'}>
    <SplitH>
      <Emacs percent={0.5} file={"~/dev/workflow/blog"} />
      <Browser percent={0.5} url={url} />
    </SplitH>
  </Workspace>,
);
