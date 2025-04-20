import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import App from './App'
import Homepage from './pages/Homepage'
import ErrorPage from './pages/ErrorPage'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CypriotWeddings from './pages/CypriotWeddings'
import EnglishWeddings from './pages/EnglishWeddings'
import Christenings from './pages/Christenings'
import Proposals from './pages/Proposals'
import Families from './pages/Families'
import Models from './pages/Models'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<Homepage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/cypriot-weddings' element={<CypriotWeddings />} />
      <Route path='/english-weddings' element={<EnglishWeddings />} />
      <Route path='/christenings' element={<Christenings />} />
      <Route path='/proposals' element={<Proposals />} />
      <Route path='/families' element={<Families />} />
      <Route path='/models' element={<Models />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
