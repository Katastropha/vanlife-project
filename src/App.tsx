import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, VansContainer, Host } from './pages/index'

import { MainNavbar } from './smallComponents/MainNavbar'
import { VanDetailedComponent } from './pages/Vans/components/VanDetailedComponent/'

import { Dashboard } from './pages/Host/HostComponents/Dashboard'
import { Income } from './pages/Host/HostComponents/Income'
import { HostVans } from './pages/Host/HostComponents/HostVans'
import { Reviews } from './pages/Host/HostComponents/Reviews'

import { dataHost } from './data/dataHost'

import { AboutComponent } from './pages/AboutComponent/AboutComponent'

// TODO: Create NotFoundComponent and add to App
// TODO: Create ErrorComponent and add the component to all pages
// TODO: Create LoginContainer and wrap it around the HostContainer, with: loader={}, action={}
// TODO: Add await function that imitate loading: loader={async ({request}) => await requireAuth(request)}
// TODO: Add 'loader' function to another pages ?

function App() {
  return (
    <BrowserRouter>
      <div className="application">
        <header className="main-header">
          <MainNavbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutComponent />}></Route>

          <Route path="/vans" element={<VansContainer />} />
          <Route path="/vans/:id" element={<VanDetailedComponent />} />

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
