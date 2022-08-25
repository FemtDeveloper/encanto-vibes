import React, { useState } from "react";
import ModalImage from "../../ModalImage/ModalImage";
import "./Beaches.css";

const Beaches = () => {
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

      <h1>Beaches</h1>
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
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Ftayrona-main.jpg?alt=media&token=beb46cd5-9faf-487a-9a50-6004a0e978a4"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>Parque Tayrona</h3>
              </div>
            </a>
            <a
              href="https://colombia.travel/es/palomino"
              className="carousel-item"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fpalomino-guajira.webp?alt=media&token=274aa61b-c065-40bb-bf76-221e3789f86d"
                className="d-block w-100 palomino-img"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>Palomino, La Guajira</h3>
              </div>
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Pen%C3%ADnsula_de_Bar%C3%BA"
              className="carousel-item"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fbar%C3%BA.jpg?alt=media&token=657fd882-d6b3-412d-b69c-3a3a030cac16"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>Barú</h3>
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
        <hr />
        <article className="beach-info">
          <div className="description-container">
            <div>
              <h2>San Andrés</h2>
              <figure>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fsan-andres1.jpg?alt=media&token=cc5c981b-f36a-4915-aac9-4c6027819797"
                  alt="bahía"
                  onClick={handleModalImage}
                />
                <figcaption>Hotel Decameron Aquarium</figcaption>
              </figure>
            </div>
            <p>
              San Andrés is the main island of the San Andres Islands, also
              compose of Providence and Santa Catalina. Located in the Caribbean
              Sea, the average temperature is 28°C and its crystal clear waters
              are perfects for make snorkeling, diving and swimming.
            </p>
          </div>
          <div className="description-container">
            <p>
              San Andrés has a wide variety of hotels that accommodate all kinds
              of budgets
            </p>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fpiscina-sanandres.jpg?alt=media&token=806d1a78-9cdb-4011-a656-ddb5eb7140b9"
                alt="piscina-san andres"
                onClick={handleModalImage}
              />
              <figcaption>La Piscina, San Andrés</figcaption>
            </figure>
          </div>
          <div className="description-container">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fdecameron-aquarium.jpg?alt=media&token=0d62acaf-d5de-4446-9d1c-92096e43ef45"
                alt="decameron aquarium"
                onClick={handleModalImage}
              />
              <figcaption>Hotel Decameron Aquarium</figcaption>
            </figure>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fhotel-bahia-sardina.jpg?alt=media&token=e25186ff-be2a-4644-aa3a-0a33bb397456"
                alt="bahia sardina"
                onClick={handleModalImage}
              />
              <figcaption>Hotel Bahía Sardina</figcaption>
            </figure>
          </div>
        </article>
        <hr />
        <article className="beach-info">
          <div className="description-container">
            <div>
              <h2>Santa Marta</h2>
              <figure>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fsanta-marta1.jpg?alt=media&token=6101eb5c-4e62-4359-a0f8-7a1911b4dfe3"
                  alt="bahía"
                  onClick={handleModalImage}
                />
                <figcaption>Parque Tayrona</figcaption>
              </figure>
            </div>
            <p>
              Someone once said that Santa Marta was the most beautiful bay in
              America, with the imposing Sierra Nevada on one side and the
              beautiful Caribbean Sea on the other. Santa Marta is located to
              the north of Colombia and has many beatiful beaches such as Playa
              Blanca, Bahía Concha, Neguanje, Taganga and El Rodadero, among
              others.
            </p>
          </div>
          <div className="description-container">
            <p>
              Like San Andres, Santa Marta has many hotels and cabins that
              combine comfort and nature.
            </p>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fneguanje.jpg?alt=media&token=caa0cbb9-11b1-4ab6-ae7d-0752d495f1f9"
                alt="FOTO NEGUANJE"
                onClick={handleModalImage}
              />
              <figcaption>Parque Tayrona</figcaption>
            </figure>
          </div>
          <div className="description-container">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fplaya-blanca.jpg?alt=media&token=c1b1d4bd-90f9-4c14-ad4a-54a536d2d085"
                alt="PLAYA BLANCA"
                onClick={handleModalImage}
              />
              <figcaption>Playa Blanca</figcaption>
            </figure>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fmarriot%20santa%20marta.jpg?alt=media&token=d3411e6a-9975-41fd-b034-612c56d6f8c9"
                alt="hotel marriot santa marta"
                onClick={handleModalImage}
              />
              <figcaption>Hotel Marriot</figcaption>
            </figure>
          </div>
        </article>
        <hr />
        <article className="beach-info">
          <div className="description-container">
            <div>
              <h2>Cartagena</h2>

              <figure>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fbocagrande.jpg?alt=media&token=d029ac5b-ee1d-4991-906a-cb52ae8d29d9"
                  alt="Bocagrande"
                  onClick={handleModalImage}
                />
                <figcaption>Bocagrande</figcaption>
              </figure>
            </div>
            <p>
              Cartagena de Indias is also located to the north of Colombia,
              founded in June 1 of 1533, Cartagena was one of the main cities of
              the Spanish crown on the caribbean having wonderful beaches where
              you can spend quiet and also exciting moments. The main beaches
              that you can visit are Playa Blanca Y Cholón, located en Barú
              Island, the Archipelago of Rosario Islands,
            </p>
          </div>
          <div className="description-container">
            <p>
              Like San Andres, Santa Marta has many hotels and cabins that
              combine comfort and nature.
            </p>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fcholon.jpg?alt=media&token=e80fbc85-774c-4c20-b923-b8db82c111db"
                alt="Bocagrande"
                onClick={handleModalImage}
              />
              <figcaption>Playa Cholón</figcaption>
            </figure>
          </div>
          <div className="description-container">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fbar%C3%BA.jpg?alt=media&token=dc67ecde-ffd5-4310-81dc-026a5dc9cb8b"
                alt="PLAYA Barú"
                onClick={handleModalImage}
              />
              <figcaption>Barú</figcaption>
            </figure>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fcharleston-santa-teresa.jpg?alt=media&token=0de8d0c7-6378-49eb-889b-a7c13ad323c2"
                alt="hotel Charleston Samta Teresa"
                onClick={handleModalImage}
              />
              <figcaption>Hotel Charleston Santa Teresa</figcaption>
            </figure>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Beaches;
