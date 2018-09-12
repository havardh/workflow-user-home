/* eslint-env node */

import React from "react";
import render, { Workspace, Layouts, Apps } from "workflow-react";

const { SplitV, SplitH } = Layouts;
const { TextEditor, Terminal, Browser } = Apps.defaults;
const { Atom } = Apps.linux;

export default render(
  <Workspace name={"colorkeys-dev"}>
    <SplitV percent={1.0}>
      <SplitH percent={0.8}>
        <Atom file={"~/dev/colorkeys"} />
        <Browser url={"~/dev/colorkeys/index.html"} />
      </SplitH>
      <Terminal 
        percent={0.2} 
        cwd={"~/dev/colorkeys/server"} 
      />
    </SplitV>
  </Workspace>
);
