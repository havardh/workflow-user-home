/* eslint-env node */

import React from "react";
import render, { Workspace, Layouts, Apps } from "workflow-react";

const { SplitV, SplitH } = Layouts;
const { TextEditor, Terminal, Browser } = Apps.defaults;
const { Atom } = Apps.linux;

const base = "~/dev/min-oekonomi";

export default render(
  <Workspace name={"econ-view-dev"}>
    <SplitV percent={1.0}>
      <SplitH percent={0.8}>
        <Atom file={base} />
        <Browser url={"http://localhost:3000"} />
      </SplitH>
      <SplitH percent={0.2}>
        <Terminal 
          percent={0.5} 
          cwd={`${base}/frontend`} 
          /*cmd={"REACT_APP_GOOGLE_TOKEN=AIzaSyB5PXUPrvcOvhvliPOoP5WpYTj5Knll6Qk npm run start"}*/
        />
        <Terminal 
          percent={0.5} 
          cwd={`${base}/backend`}
          /*cmd={"npm run serve"}*/
        />
      </SplitH>
    </SplitV>
  </Workspace>
);
