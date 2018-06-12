/* eslint-env node */

import React from 'react';
import render, { Workspace, Layouts, Apps } from 'workflow-react';

const { SplitH, SplitV } = Layouts;
const { Browser, Terminal } = Apps.defaults;
const { Atom } = Apps.linux;


export default render(
  <Workspace name={'lifefeed-db'}>
    <Terminal cwd={"~/dev/lifefeed/server"} cmd={"psql postgres://postgres:postgres@localhost/lifefeed"} />
  </Workspace>,
);
