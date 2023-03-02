import {Container, Button, Form} from 'react-bootstrap'
import Depoimentos from '../components/Depoimentos'

function Contato() {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Mensagem enviada com sucesso!')
        event.target.reset()
    }

    return (
        <Container className='contatO'>
            <div className='formulario'>
                <div className='text-contato'>
                    <h1 id='text-contato'>Contato</h1>
                    <p>Entre em contato conosco</p>
                </div>
                

                <Form className='' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="Nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome completo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Email">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu e-mail" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Mensagem">
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control className='textArea' as="textarea" rows={3} />
                    </Form.Group>
                    <Button className='btn-form' variant="primary" type="submit">
                        Enviar contato
                    </Button>
                </Form>
            </div>
            <Depoimentos/>
        </Container>
    );
}

export default Contato;