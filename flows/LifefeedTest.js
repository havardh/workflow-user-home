/* eslint-env node */

import React from 'react';
import render, { Workspace, Layouts, Apps } from 'workflow-react';

const { SplitH, SplitV } = Layouts;
const { Browser, Terminal } = Apps.defaults;
const { Atom } = Apps.linux;

function testFile(file) {
  return file.replace(".js", ".test.js");
}

export default render(
  <Workspace args={['file']} name={'lifefeed-test'}>
    <SplitV percent={1}>
      <SplitH percent={0.8}>
        <Atom percent={0.5} file={({file}) => file} />
        <Atom percent={0.5} file={({file}) => testFile(file)} />
      </SplitH>
      <Terminal percent={0.2} cwd={"~/dev/lifefeed/client"} />
    </SplitV>
  </Workspace>,
);
