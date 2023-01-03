'use client'

import Image from 'next/image'

// import Carousel from 'react-bootstrap/Carousel'

export default function CarouselPage() {
  return (
    <>
      <div className="aaaa" style={{ width: '100%', overflow: 'hidden' }}>
        <Image
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src="/images/3.jpg"
          alt="First slide"
          width="1000"
          height="667"
        />
        <div className="aaaaa">
          <div className="content">
            <h2>S Y U</h2>
            <h2>S Y U</h2>
          </div>
        </div>
        {/* <div className="d-flex justify-content-center text-nowrap">
          <div className="content">
            <h2>test</h2>
            <h2>test</h2>
          </div>
        </div> */}
      </div>
    </>
  )
}
