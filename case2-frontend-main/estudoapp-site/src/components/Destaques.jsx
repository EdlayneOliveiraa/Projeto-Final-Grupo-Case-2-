import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="img/Conheca-Nosso-Aplicativo.png" />
                    <Card.Body>
                        <Card.Title>CONHEÇA NOSSO APLICATIVO</Card.Title>
                        <Card.Text>
                        As listas de tarefas são ferramentas simples, mas eficazes, que podem dividir atividades maiores em etapas menores. Elas podem variar de tarefas diárias individuais a grandes objetivos de grupo.
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Acessar o Aplicativo</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="img/Conheça-Nossos-Temas.png" />
                    <Card.Body>
                        <Card.Title>CONHEÇA NOSSOS TEMAS</Card.Title>
                        <Card.Text>
                        Temos diversos temas que podem facilitar o seu dia a dia com suas atividades físicas.
                        Com nossas listas é possível criar uma rotina frequente e organizada, trazendo praticidade e conforto no seu dia a dia.
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Veja mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" img src="img/Suporte-Pag.png" />
                    <Card.Body>
                        <Card.Title>SUPORTE PERSONALIZADO</Card.Title>
                        <Card.Text>
                        Buscar sempre um profissional qualificado para sanar suas dúvidas.
                        Dúvidas sobre alimentação e os exercícios físicos, entre em contato agora mesmo com nosso suporte.
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <div className='cabecaoPai'>
                <div className='cabecao'>
                <h1>Por que escolher a<br/> plataforma FitCheck</h1>
                </div>
          <div className='percoco'>
                <div className='tornoza'>
                    <div className='torn'>
                        <img src="/img/Praticidade-Icon.png" alt="" width={50} />
                        <h3>Praticidade</h3>
                        <p>Contribui com uma alimentação equilibrada,<br /> 
                            saudável e a prática de exercícios 
                            físicos.</p>
                    </div>
                    <div className='torn'>
                    <img src="/img/Organizacao-Icon.png" alt="" width={50}/>
                        <h3>Organização</h3>
                        <p>Uma lista organizada facilita o seu <br /> desenvolvimento
                        dia a dia</p>
                    </div>

                    <div className='cane'>
                    <img src="/img/Suporte-Icon.png" alt="" width={50}/>
                        <h3>Suporte Exclusivo</h3>
                        <p>Suporte exclusivo conforme a sua necessidade</p>
                    </div>

                </div>

                <div className='canela'>
                    <div className='caneE'>
                    <img src="/img/Variedade-de-Temas-Icon.png" alt="" width={50}/>
                        <h3>Variedade de Temas</h3>
                        <p>Diversos temas a sua escolha</p>
                        </div>
                    <div className='cane'>
                    <img src="/img/Perfil-Personalizado-Icon.png" alt="" width={50}/>
                        <h3>Perfil Personalizado</h3>
                        <p>Crie seu próprio tema de acordo <br />
                         com a seu 
                        gosto</p>
                    </div>
                    <div className='torn'>
                    <img src="/img/Rotina-Icon.png" alt="" width={50}/>
                        <h3>Rotina</h3>
                        <p>Toda rotina bem gerenciada vira um <br />
                         bom hábito</p>
                    </div>
                </div>
                </div>
             </div> 
                                    
        </Row>
        
    );
}

export default Destaques;