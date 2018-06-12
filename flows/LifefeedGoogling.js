/* eslint-env node */

import React from 'react';
import render, { Workspace, Layouts, Apps } from 'workflow-react';

const { SplitH, SplitV } = Layouts;
const { Browser, Terminal } = Apps.defaults;
const { Atom } = Apps.linux;


export default render(
  <Workspace name={'lifefeed-googling'}>
    <SplitV percent={1}>
      <SplitH percent={0.8}>
        <Atom percent={0.5} file={"~/dev/lifefeed"} />
        <Browser
          percent={0.5}
          url={'localhost:3000'}
        />
      </SplitH>
    </SplitV>
  </Workspace>,
);
