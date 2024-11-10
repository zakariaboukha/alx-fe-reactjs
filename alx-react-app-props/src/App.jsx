import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    
    <>
    <UserProvider userData={userData}>
      <ProfilePage />
    </UserProvider>
      
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
