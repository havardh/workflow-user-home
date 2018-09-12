/* eslint-env node */

import React from "react";
import render, { Workspace, Layouts, Apps } from "workflow-react";

const { SplitV, SplitH } = Layouts;
const { TextEditor, Terminal, Browser } = Apps.defaults;
const { Emacs } = Apps.linux;

export default render(
  <Workspace name={"spacemaker-db"}>
    <SplitV>
      <Browser percent={0.1} url={"https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546"} />
      <Terminal percent={0.9} cwd={"~/dev/spacemaker.intervju"} cmd={"psql postgres://postgres:postgres@localhost/spacemakerintervju"} />
    </SplitV>
  </Workspace>
);
