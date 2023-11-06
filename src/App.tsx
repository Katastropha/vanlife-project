import './App.css'
import './pages/Host/host.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, About, Vans, Host } from './pages/index'
import { MainNavbar } from './components/MainNavbar'
import { VanDetailed } from './components/VanDetailed'
import { Dashboard } from './pages/Host/Dashboard'
import { Income } from './pages/Host/Income'
import { HostVans } from './pages/Host/HostVans'
import { Reviews } from './pages/Host/Reviews'

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

          <Route path="/host" element={<Host />}>
            <Route path="/host" element={<Dashboard host={dataHost[0]} />} />
            <Route
              path="/host/income"
              element={<Income host={dataHost[0]} />}
            />

            <Route
              path="/host/hostVans"
              element={<HostVans host={dataHost[0]} />}
            />

            <Route
              path="/host/reviews"
              element={<Reviews host={dataHost[0]} />}
            />
          </Route>
        </Routes>

        <footer className="main-footer">
          <p className="main-footer_text">Ⓒ 2022 #VANLIFE</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
