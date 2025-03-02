import { BrowserRouter as Router ,Route,Routes } from "react-router-dom"

import Home from "./mainpage/Home"
import About from "./pages/About/About"
function App() {

  return (
    <>

    <Router>
    <Home/>
         
         
          <Routes>
<Route path="/about"  element={<About/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
