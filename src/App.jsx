import { BrowserRouter as Router ,Route,Routes } from "react-router-dom"

import Home from "./mainpage/Home"
function App() {

  return (
    <>

    <Router>
    <Home/>
         
         
          <Routes>
<Route path="/"  element/>
      </Routes>
    </Router>

    </>
  )
}

export default App
