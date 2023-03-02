import Carousel from "react-bootstrap/Carousel";
import ListaFuncionalidades from "../components/ListaFuncionalidades";
import Container from "react-bootstrap/Container";
import Banners from "../components/Banners";
import { useEffect, useState } from "react";
import CmsApi from "../api/CmsApi";

function Funcionalidades() {
  const [funcionalidades, setFuncionalidades] = useState([]);

  useEffect(() => {
    async function fetchFuncionalidades() {
      const response = await CmsApi().getFuncionalidades();
      if (!response.ok) {
        alert("Erro ao carregar funcionalidades");
        return;
      }
      const funcionalidades = await response.json();
      setFuncionalidades(funcionalidades.data);
    }

    fetchFuncionalidades();
  }, []);

  return (
    <>
      <Carousel className="cavalinho">
        <Carousel.Item>
          <img className="d-block w-100" src="/img/Banner-1.png" alt="" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/Banner-2.png" alt="" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/Banner-3.png" alt="" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="conteudo-margin">
        <h1>Temas</h1>
        <ListaFuncionalidades funcionalidades={funcionalidades} />
      </Container>
    </>
  );
}

export default Funcionalidades;
