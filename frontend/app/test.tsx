'use client'

import Container from 'react-bootstrap/Container'

function TestPage() {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center text-nowrap">
          <div className="content">
            <h2>test</h2>
            <h2>test</h2>
          </div>
        </div>
        <div style={{ padding: '40px' }}></div>
      </Container>
    </>
  )
}

export default TestPage
