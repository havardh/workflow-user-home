/* eslint-env node */

import React from 'react';
import render, { Workspace, Layouts, Apps, createComponent } from 'workflow-react';

const { SplitV } = Layouts;
const { TextEditor, Terminal } = Apps.defaults;


const Intellij = createComponent({
  type: "app",
  xClass: "jetbrains-idea",
  params: ['folder'],
  open: ({folder}) => `ic ${folder}`
});



export default render(
  <Workspace name={'javaflow-maven-plugin-sample'}>
    <SplitV percent={0.9}>
      <Intellij percent={0.8} folder={"~/dev/javaflow-maven-plugin-sample"} />
      <Terminal percent={0.2} cwd={"~/dev/javaflow-maven-plugin-sample"} />
    </SplitV>
  </Workspace>,
);
