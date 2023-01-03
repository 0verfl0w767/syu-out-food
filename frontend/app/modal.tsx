import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function TestModal(props: any) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{props.page}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.page}</h4>
        <p>...</p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="outline-secondary" onClick={props.onHide}>
          닫기
        </Button> */}
      </Modal.Footer>
    </Modal>
  )
}

export default TestModal
