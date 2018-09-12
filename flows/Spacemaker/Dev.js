/* eslint-env node */

import React from "react";
import render, { Workspace, Layouts, Apps } from "workflow-react";

const { SplitV, SplitH } = Layouts;
const { TextEditor, Terminal, Browser } = Apps.defaults;
const { Emacs } = Apps.linux;

export default render(
  <Workspace name={"spacemaker-dev"}>
    <SplitV percent={1.0}>
      <SplitH percent={0.8}>
        <Emacs file={"~/dev/spacemaker.intervju"} />
        <Browser url={"http://localhost:3000"} />
      </SplitH>
      <SplitH percent={0.1}>
        <Terminal 
          percent={0.5} 
          cwd={"~/dev/spacemaker.intervju/client"} 
          /*cmd={"REACT_APP_GOOGLE_TOKEN=AIzaSyB5PXUPrvcOvhvliPOoP5WpYTj5Knll6Qk npm run start"}*/
        />
        <Terminal 
          percent={0.5} 
          cwd={"~/dev/spacemaker.intervju/server"} 
          /*cmd={"npm run serve"}*/
        />
      </SplitH>
    <Terminal percent={0.1} cwd={"~/dev/spacemaker.intervju/server"} />
    </SplitV>
  </Workspace>
);
