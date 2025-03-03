import { BrowserRouter as Router ,Route,Routes } from "react-router-dom"

import Home from "./mainpage/Home"
import About from "./pages/About/About"
import Footer from "./pages/Footer"
import Layout from "./pages/layout/Layout"
import { ROUTES } from "./constant"
import Contact from "./pages/layout/Contact"
function App() {

  return (
    <>
 <Router>
 
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />

          <Route path={ROUTES.CONTACT} element={<Contact />} />

        </Routes>
      
    </Router>

    </>
  )
}

export default App
