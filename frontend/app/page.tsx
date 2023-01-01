import 'bootstrap/dist/css/bootstrap.css'

import '../styles/global.css'
import '../styles/test.css'
import BodyPage from './body'
import NavbarPage from './navbar'
import TestPage from './test'

export default function Page() {
  return (
    <>
      <NavbarPage />
      <TestPage />
      <BodyPage />
    </>
  )
}
