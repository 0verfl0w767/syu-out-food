import 'bootstrap/dist/css/bootstrap.css'

import '../styles/global.css'
import '../styles/test.css'
import BodyPage from './body'
import CarouselPage from './carousel'
import NavbarPage from './navbar'

export default function Page() {
  return (
    <>
      <nav>
        <NavbarPage />
      </nav>
      <CarouselPage />
      <section>
        <BodyPage />
      </section>
    </>
  )
}
