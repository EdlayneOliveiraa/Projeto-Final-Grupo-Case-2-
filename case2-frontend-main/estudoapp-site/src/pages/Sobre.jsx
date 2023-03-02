import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
        <Container className='conteudo-margin'>
                <h1>Sobre nós:</h1>
                <div className='text_img'>
                <div className='sobre-img'>
                    <img src="/img/Quem-Somos.png" width={700} alt="" />
                </div>
                <div className='sobre-text'>
            <h4>Desde a criação do site Fit Check, em 2020 nosso objetivo é trazer praticidade que contribuam para a tomada de decisões em busca de uma alimentação equilibrada, saudável e prática de exercícios físicos. Além de um suporte 24h com nutricionistas e personal training.
                Plano alimentar, receitas e programa de exercícios são exemplos de listas que podem ser feitas para trazer facilidade no seu dia a dia.
                Hoje, somos uma rede estruturada que leva funcionalidade ao usuário, apurado por profissionais de comunicação e com todo o suporte de especialistas em saúde e alimentação do mercado e da própria Fit Check, para mais de 2 milhões de seguidores que acompanham nossas publicações no blog e nas redes sociais.
                Seja muito bem-vindo!
                Para falar conosco, acesse nossos canais.</h4>
            <p>{sobre.text}</p>
                </div>
                </div>

                <div className='equipeP'>
                    <div>
                        <h4>
                        Cada pessoa é única. Nenhuma é igual a outra.
                        Como não somos iguais, temos gostos, pensamentos,
                         atitudes, defeitos e qualidade bastantes diversificadas.
                          Daí a nossa dificuldade quando temos de nos relacionar
                         com outras pessoas para realizar alguma tarefa.<br/>
                         Um exemplo disso, é o trabalho em grupo. Muitas brigas
                          e discussões, que as vezes até geram inimizades,
                           fazem parte do caminho árduo e sofrido que o 
                           grupo percorre até a finalização do trabalho.
                           <br/>
                           Apesar de todos os obstáculos conseguimos avançar
                            e concluir mais uma etapa, independente das
                             nossas diferenças e habilidades. Com isso
                              concluímos  e conseguimos concluir nosso
                               trabalho com grande êxito. 
                            <br />
                            <br />
                        </h4>
                    </div>
                    <div className='equipeF'>
                        <h1>Equipe:</h1>
                    <img src="/img/Equipe.png" width={700} alt="" />
                    <h4><strong className='fraco'>Obrigado a todos os membros dessa equipe MARAVILHOSA!!!</strong> </h4>
                    </div>
                </div>
            <Depoimentos />
        </Container>
    );
}

export default Sobre