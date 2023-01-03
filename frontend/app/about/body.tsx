'use client'

import Image from 'next/image'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'

function BodyPage() {
  return (
    <>
      <Container>
        <div style={{ marginTop: '10px' }}>
          <Accordion defaultActiveKey={['3']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Frontend Tech</Accordion.Header>
              <Accordion.Body>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="typescript"
                  width="45"
                  height="45"
                />
                <span style={{ margin: '10px' }}>React</span>
                <hr />
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="bootstrap"
                  width="45"
                  height="45"
                />
                <span style={{ margin: '10px' }}>Bootstrap</span>
                <hr />
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                  alt="next"
                  width="45"
                  height="45"
                />
                <span style={{ margin: '10px' }}>Next</span>
                <hr />
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="typescript"
                  width="45"
                  height="45"
                />
                <span style={{ margin: '10px' }}>Typescript</span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Backend Tech</Accordion.Header>
              <Accordion.Body>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
                  alt="nest"
                  width="45"
                  height="45"
                />
                <span style={{ margin: '10px' }}>Nest</span>
                <hr />
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="typescript"
                  width="45"
                  height="45"
                />
                <span style={{ margin: '10px' }}>Typescript</span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Etc Tech</Accordion.Header>
              <Accordion.Body>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg"
                  alt="gcp"
                  width="45"
                  height="45"
                />
                <span style={{ margin: '10px' }}>Google Cloud Platform</span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Author Info</Accordion.Header>
              <Accordion.Body>삼육대학교 컴퓨터공학부 소속</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </>
  )
}

export default BodyPage
