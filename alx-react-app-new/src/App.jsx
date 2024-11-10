import React from 'react';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div>
            <WelcomeMessage />
        </div>
      <>
            <Header />
            <MainContent />
            <Footer />
        </>
       <>
            {/* Existing components like <Header />, <MainContent />, <Footer /> */}
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        </>
      <div>
        <h1>Simple Counter App</h1>
        <Counter />  {/* Step 2: Include the Counter component here */}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
