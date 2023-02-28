import { Modal, Button, Form } from 'react-bootstrap'
function CreateContentModal(props) {
  return(
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={props.isModalOpen}>
        <Form onSubmit={(event) => {
          props.createContent(event)
        }}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Crie sua lista</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="titulo">
            <Form.Label>
              Afazeres
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="descricao">
            <Form.Label>
              Descrição/ Detalhes
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="porcentagem">
            <Form.Label>
              Prioridade (0 a 10)
            </Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Fechar</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Modal.Footer>
        </Form>
      </Modal >
    </div>
  )
}

export default CreateContentModal
