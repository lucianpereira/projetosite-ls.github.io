import React from "react";
import "./index.css";
import Carousel from "react-bootstrap/Carousel";

function HomePage() {
  return (
    <div className="carrossel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static2.srcdn.com/wordpress/wp-content/uploads/2021/05/Cruella-Character-Poster-Header.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Cruella</h3>
            <p>
              Teoria Cruella: o filme da Disney é uma prequela dos 101 dálmatas
              dos anos 90.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cinematologia.com.br/cine/wp-content/uploads/2019/12/Fox-032398-Full-Image_GalleryCover-en-US-1574855892406._UY500_UX667_RI_VLOSs7qy2Tkshg9Z2on6WPAelF4rjG_TTW_.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Jojo Rabbit</h3>
            <p>
              Um menino alemão da Juventude Hitlerista que descobre uma garota
              judia escondida em sua casa.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.maioresemelhores.com/imagens/mm-filmes-atuais-2-cke.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Harriet</h3>
            <p>
              Uma mulher que arriscou a vida para libertar outras pessoas da
              escravidão no sul dos EUA.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomePage;
