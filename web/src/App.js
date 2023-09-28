import { useState } from 'react';

import './styles/App.css'; //app.css
import './styles/reset.css'; //reset css

import { makeRequest } from './api/api';
import { SideMenu } from './components/SideMenu/SideMenu';

function App() {
  return (
    <div className="App">
      <SideMenu></SideMenu>
      <h1>App Works!!</h1>
    </div>
  );
}

export default App;
