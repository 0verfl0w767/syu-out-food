import 'bootstrap/dist/css/bootstrap.css'

import '../../styles/global.css'
import '../../styles/test.css'
import NavbarPage from '../navbar'
import BodyPage from './body'
import CarouselPage from './carousel'

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
