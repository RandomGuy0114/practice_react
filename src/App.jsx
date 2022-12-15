import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Notfound from "./Notfound"
import Navbar from "./Navbar"
import Footer from "./Footer"


function App() {
    return (
        <div >
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Home" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer />
        </div>

    )
}

export default App