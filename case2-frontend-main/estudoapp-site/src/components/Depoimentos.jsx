import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
      <>
      
        <h2 className='mt-3'>Depoimentos</h2>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="/img/Depoimento-1.png" width={100} height= {100} alt="Foto do depoimento" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong className='forte'>Euqiak</strong>
                <p>
                        "Eu levava uma vida totalmente sedentária, vivia estressado, com fortes dores de cabeça e pesava 95kg.
                        Minha esposa foi quem me apresentou o FIT CHECK, ela fez as listas do plano alimentar e dos exercícios…comecei a
                        reparar na alegria e na disposição que ela tinha a cada peso perdido e decidi seguir o mesmo caminho.
                        Afinal ter mais saúde poderia viver mais tempo e aproveitar a minha família. Hoje, posso dizer que, por causa do FIT CHECK, 
sou uma pessoa diferente. Em dois meses perdi 11Kg, minha vida mudou totalmente… Hoje sou uma pessoa disciplinada."
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="/img/Depoimento-2.png" alt="Foto do depoimento 2" width={100} height={100} className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong className='forte'>Arlinda</strong>
                <p>
                        "No início da quarentena, em março, eu estava muito sedentária: basicamente comia e dormia.
                        Quando conheci o FIT CHECK pensei que seria um modo de me sentir melhor, então comecei a praticar os exercícios e mudar minha alimentação.
                        Fiz todas as listas para mudança na alimentação nos exercícios, também fiz caminhadas e essa sempre foi a recomendação dos médicos para mim.
                        Tenho um problema de saúde em que atividades físicas são essenciais.
                        Hoje recomendo e não vivo sem o FIT CHECK, sinto diferenças gritantes no meu corpo e na minha mente.
                        Me sinto mais disposta, revigorada e feliz.
aprendi a cuidar da minha alimentação e perdi a minha ansiedade. Nunca é tarde para começar."
                </p>
            </Col>
    </Row>       
    </>
    )
}

export default Depoimentos