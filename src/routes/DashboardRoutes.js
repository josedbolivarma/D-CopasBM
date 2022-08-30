import { Route, Routes } from 'react-router-dom'
import { Footer } from '../components'
import { Header } from '../components'
import { Home, Detail, Menu } from '../pages'

const DashboardRoutes = () => {
  return (
    <div>
      <Header />
    <Routes>
        {/* Dashboard */}
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        {/* Dashboard */}
    </Routes>
    <Footer />
    </div>
  )
}

export default DashboardRoutes