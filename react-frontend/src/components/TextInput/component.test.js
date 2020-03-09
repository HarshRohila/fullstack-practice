import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import TextInput from './component';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('type works', () => {
    act(() => {
        render(<TextInput type="password"/>, container);
    });
    expect(container.querySelector('input').type).toMatch(/password/);
});

test('label sets name in camelcase', () => {
    act(() => {
        render(<TextInput label="Text Input"/>, container);
    });
    expect(container.querySelector('input').name).toMatch(/textInput/);
});
