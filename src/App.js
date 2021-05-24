import React from 'react';
import Main from './views/Main.jsx';
import Detail from './views/Detail.jsx'
import { Router } from '@reach/router'
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/product/new"/>
        <Detail path="/product/one/:id"/>
      </Router>
    </div>
  );
}
export default App;