import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './Pages/Homepage'
import { HashRouter, Route,Routes } from 'react-router-dom'
import Trending from './Pages/Trending'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
    {/* // <div className="bg-red">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div> */}
      <HashRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/viewall-trending' element={<Trending/>}/>
        </Routes>
      </HashRouter>
    
    </>
  )
}

export default App
