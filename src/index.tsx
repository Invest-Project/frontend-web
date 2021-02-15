import React from 'react';
import { render } from 'react-dom';
import Route from "./route";

const App = () => (
  <div>
    <Route />
  </div>
);

render(<App />, document.getElementById('root'));