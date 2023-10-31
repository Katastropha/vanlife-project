import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Vans, Host } from '../index'
import { MainNavbar } from '../../components/MainNavbar'
import { VanDetailed } from '../../components/VanDetailed'

export function App() {
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
            {/* <Route
              path="/"
              element={<Dashboard name="host123" income={2000} />}
            /> */}

            {/* <Route path="/income" element={<Income host={dataHost[0]} />} /> */}

            {/* <Route path="/hostVans" element={<HostVans />} /> */}

            {/* <Route path="/reviews" element={<Reviews />} /> */}
          </Route>
        </Routes>

        <footer className="main-footer">
          <p className="main-footer_text">Ⓒ 2022 #VANLIFE</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}
