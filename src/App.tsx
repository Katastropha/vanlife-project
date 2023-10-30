import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, About, Vans, Host } from './pages/index'
import { MainNavbar } from './components/MainNavbar'
import { TestContainer } from './Test'
import { VanDetailed } from './components/VanDetailed'
import { Dashboard } from './pages/Host/Dashboard'
import { Income } from './pages/Host/Income'
import { HostVans } from './pages/Host/HostVans'
import { Reviews } from './pages/Host/Reviews'
import { TestFetch } from './pages/TestFetch'

import { dataHost } from './dataHost'

function App() {
  return (
    <BrowserRouter>
      <div className="application">
        <header className="main-header">
          <MainNavbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetailed />} />

          <Route path="/test-fetch" element={<TestFetch />} />

          <Route path="/host" element={<Host />}>
            <Route
              path="/"
              element={<Dashboard name="host123" income={2000} />}
            />
            <Route path="/income" element={<Income host={dataHost[0]} />} />
            <Route path="/hostVans" element={<HostVans />} />
            <Route path="/reviews" element={<Reviews />} />
          </Route>

          <Route path="/test" element={<TestContainer />} />
        </Routes>

        <footer className="main-footer">
          <p className="main-footer_text">Ⓒ 2022 #VANLIFE</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
