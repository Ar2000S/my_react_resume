import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from "./components/Header";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <div className="opacity">
      <div className="background"></div>
    </div>
        <Header />
        <Summary />
        <Footer />
        

    </div>
  );
}

export default App
