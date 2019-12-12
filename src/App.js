import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/Main';
import BackBody from './components/backBody/BackBody';
import ResponsiveMenu from './components/responsiveMenu/ResponsiveMenu';

function App() {
  return (
    <>
      <BackBody />
      <ResponsiveMenu />
      <Main />
    </>
  );
}

export default App;
