import { componentPascalCase } from "../functions/index.js";

const template = (componentName) => `/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import ${componentPascalCase(componentName)} from './index';

it("${componentPascalCase(componentName)} renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<${componentPascalCase(componentName)} />, div);
  ReactDOM.unmountComponentAtNode(div);
});`;

export default template;
