import React, { useState } from 'react';
import './index.css';
import Page from './components/ChartPage';
function App() {

  return (
    <>
     <div className="flex items-center justify-center h-screen w-full bg-black font-[400] ">
       <Page />
    </div>
    </>
  );
}

export default App;
