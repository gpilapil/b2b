import React from 'react'
import './custom.scss'
import { Route, Routes } from 'react-router-dom'
import '@pmi/dsm-react/dist/assets/styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './components/Home'
import { Layout } from './components/Layout'

export const App = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Home />} />
      </Routes>
    </Layout>
  )
}
