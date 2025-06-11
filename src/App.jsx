import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import RWAAdvertising from "./pages/services/RWAAdvertising"
import CommercialAdvertising from "./pages/services/CommercialAdvertising"
import MetroAdvertising from "./pages/services/MetroAdvertising"
import MultiplexAdvertising from "./pages/services/MultiplexAdvertising"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services/rwa" element={<RWAAdvertising />} />
          <Route path="/services/commercial" element={<CommercialAdvertising />} />
          <Route path="/services/metro" element={<MetroAdvertising />} />
          <Route path="/services/multiplex" element={<MultiplexAdvertising />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
