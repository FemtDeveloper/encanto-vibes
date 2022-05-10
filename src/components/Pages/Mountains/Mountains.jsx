import React, { useState } from "react";
import ModalImage from "../../ModalImage/ModalImage";

const Mountains = () => {
  const [sourceModalImage, setSourceModalImage] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleModalImage = async (e) => {
    console.log(e);
    setSourceModalImage(await e.target.src);
    setIsShowModal(true);
  };
  return (
    <div className="regions-container">
      {isShowModal && (
        <ModalImage
          imageSource={sourceModalImage}
          setIsShowModal={setIsShowModal}
        />
      )}
      <h1>Mountains</h1>
      <section className="region-container" id="regions">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <a
              href="https://www.parquetayrona.com/es/"
              className="carousel-item active"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fcocora.webp?alt=media&token=e5cfabb1-5998-4ab3-a337-45b6f07e9c1d"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </a>
            <a
              href="https://www.larepublica.co/ocio/palomino-esta-en-el-top-10-de-los-destinos-para-2019-2797852"
              className="carousel-item"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fnevado-ruiz.jpg?alt=media&token=d50ed52f-b6ea-4439-8bf8-41ddb5bbdd98"
                className="d-block w-100 palomino-img"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Pen%C3%ADnsula_de_Bar%C3%BA"
              className="carousel-item"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fchingaza-lagunas.jpg?alt=media&token=adc5c9c0-df6c-461b-8579-3186afc85355"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </a>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="main-beaches--container">
        <p>
          In colombia there are a lot of beaches in different regions; there are
          continental beaches and beautiful islands. At the same cities you can
          find different places where you can share with your family and
          friends. Here we bring you what we consider the most beautiful and
          popular
        </p>
        <article className="beach-info">
          <h2>Sierra Nevada de Santa Marta</h2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fsierra-nevada1.jpg?alt=media&token=176dba2c-40a7-4210-a8ff-d61f03a9ef69"
            alt="Siera-nevada"
            onClick={handleModalImage}
          />
          <p>
            San Andrés is the main island of the San Andres Islands, also
            compose of Providence and Santa Catalina. Located in the Caribbean
            Sea, the average temperature is 28°C and its crystal clear waters
            are perfects for make snorkeling, diving and swimming.
          </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fsierra-nevada2.jpg?alt=media&token=01811a03-55bf-4c46-a419-bce64de425db"
            alt="pueblo kogui"
            onClick={handleModalImage}
          />
          <p>
            San Andrés has a wide variety of hotels that accommodate all kinds
            of budgets
          </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fciudad-perdida.jpg?alt=media&token=c69e77e7-d182-4532-8e29-da55e287c297"
            alt="ciudad perdida"
            onClick={handleModalImage}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fsierra-nevada3.jpg?alt=media&token=430e8d82-2494-4c16-aef0-32d84072f4aa"
            alt="Sierra nevada malla"
            onClick={handleModalImage}
          />
        </article>
        <article className="beach-info">
          <h2>Eje Cafetero</h2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Feje-cafetero.jpg?alt=media&token=039415b1-7a91-45b0-b175-8e4bc10ae81f"
            alt="bahía"
            onClick={handleModalImage}
          />
          <p>
            Someone once said that Santa Marta was the most beautiful bay in
            America, with the imposing Sierra Nevada on one side and the
            beautiful Caribbean Sea on the other. Santa Marta is located to the
            north of Colombia and has many beatiful beaches such as Playa
            Blanca, Bahía Concha, Neguanje, Taganga and El Rodadero, among
            others.
          </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fbalcones-casas.jpg?alt=media&token=7afc0644-9bd6-4c6e-8371-0fb2ea51628f"
            alt="FOTO NEGUANJE"
            onClick={handleModalImage}
          />
          <p>
            Like San Andres, Santa Marta has many hotels and cabins that combine
            comfort and nature.
          </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Ffinca-cafetera.jpg?alt=media&token=548a6e17-c42e-4f56-aa1b-8c13aea59854"
            alt="Finca Cafetera"
            onClick={handleModalImage}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Ffinca-hotel-rancho-san-antonio.jpg?alt=media&token=82f0afd8-7e58-46f6-94fc-b2e462cbb082"
            alt="Rancho San Antonio"
            onClick={handleModalImage}
          />
        </article>
        <article className="beach-info">
          <h2>Boyacá</h2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fpuente-de-boyaca.jpg?alt=media&token=38353851-e8ab-4cf7-bef9-72435b80404e"
            alt="Puente de Boyaca"
            onClick={handleModalImage}
          />
          <p>
            Cartagena de Indias is also located to the north of Colombia,
            founded in June 1 of 1533, Cartagena was one of the main cities of
            the Spanish crown on the caribbean having wonderful beaches where
            you can spend quiet and also exciting moments. The main beaches that
            you can visit are Playa Blanca Y Cholón, located en Barú Island, the
            Archipelago of Rosario Islands,
          </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fpuente-del-espa%C3%B1ol-boyaca.jpg?alt=media&token=fd49ec64-a6db-437f-8d2e-7b5f44bd9f7a"
            alt="Puente del español boyacá"
            onClick={handleModalImage}
          />
          <p>
            Like San Andres, Santa Marta has many hotels and cabins that combine
            comfort and nature.
          </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Figuaque.jpg?alt=media&token=827aa300-3447-4ca8-a018-050d42359f01"
            alt="Laguna Iguaque"
            onClick={handleModalImage}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fduruelo-boyac%C3%A1.jpg?alt=media&token=43943d5f-ad16-423f-8909-40aef9aab146"
            alt="Hospedería Duruelo"
            onClick={handleModalImage}
          />
        </article>
      </section>
    </div>
  );
};

export default Mountains;
