'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'

import TestModal from './modal'

function BodyPage() {
  const target = useRef(null)
  const preventRef = useRef(true)
  const [Page, setPage] = useState<number>(1)
  const [List, setList] = useState<number[]>([])
  const [Load, setLoad] = useState<boolean>(false)
  const [modalShow, setModalShow] = useState<boolean>(false)
  const [modalShowPage, setModalShowPage] = useState<number>(1)

  const callback = async (entries: any) => {
    if (entries[0].isIntersecting && preventRef.current) {
      preventRef.current = false
      setLoad(true)
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 1000 * 2)
      })
      preventRef.current = true
      setLoad(false)
      setPage((page) => page + 1)
    }
  }

  const getData = useCallback(() => {
    const datas = [Page]
    setList((prev) => [...prev, ...datas])
    console.log(List)
  }, [Page])

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: 1.0,
    })
    observer.observe(target.current!)
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Container>
        {List && (
          <>
            {List.map((element) => (
              <div key={element}>
                <Card style={{ marginTop: '10px' }}>
                  <Card.Header>{element}</Card.Header>
                  <Card.Img
                    variant="top"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  />
                  <Card.Body>
                    <Card.Text>test..</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          setModalShow(true)
                          setModalShowPage(element)
                        }}
                      >
                        test..
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            ))}
          </>
        )}
        <TestModal show={modalShow} page={modalShowPage} onHide={() => setModalShow(false)} />
        {Load && (
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        <div ref={target} />
      </Container>
    </>
  )
}

export default BodyPage
