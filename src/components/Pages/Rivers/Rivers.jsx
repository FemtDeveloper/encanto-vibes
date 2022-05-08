import React from "react";

const Rivers = () => {
  return (
    <div className="regions-container">
      <h1>Rivers</h1>
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
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fca%C3%B1o-cristales-1.jpg?alt=media&token=2d68d020-f48b-430f-baee-45febbea678d"
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
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Ffin-del-mundo-putumayo.jpg?alt=media&token=712aab4f-a95b-424b-982c-ecf2e138fab5"
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
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fnorcasia-1.webp?alt=media&token=f9f4b1db-6288-4d04-868b-0c4c6e8e2536"
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
          <h2>Caño Cristales</h2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fcano-cristales1.jpg?alt=media&token=4aa67fe2-16c5-4b48-b820-a78423310123"
            alt="bahía"
          />
          <p>
            Located in the Serranía de la Macarena, also called the river of
            seven colors is one of the most beautiful rivers in Colombia
          </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fpiscina-sanandres.jpg?alt=media&token=806d1a78-9cdb-4011-a656-ddb5eb7140b9"
            alt="piscina-san andres"
          />
          <p>
            San Andrés has a wide variety of hotels that accommodate all kinds
            of budgets
          </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fdecameron-aquarium.jpg?alt=media&token=0d62acaf-d5de-4446-9d1c-92096e43ef45"
            alt="decameron aquarium"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fhotel-bahia-sardina.jpg?alt=media&token=e25186ff-be2a-4644-aa3a-0a33bb397456"
            alt="bahia sardina"
          />
        </article>
        <article className="beach-info">
          <h2>Santa Marta</h2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fsanta-marta1.jpg?alt=media&token=6101eb5c-4e62-4359-a0f8-7a1911b4dfe3"
            alt="bahía"
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
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fneguanje.jpg?alt=media&token=caa0cbb9-11b1-4ab6-ae7d-0752d495f1f9"
            alt="FOTO NEGUANJE"
          />
          <p>
            Like San Andres, Santa Marta has many hotels and cabins that combine
            comfort and nature.
          </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fplaya-blanca.jpg?alt=media&token=c1b1d4bd-90f9-4c14-ad4a-54a536d2d085"
            alt="PLAYA BLANCA"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fmarriot%20santa%20marta.jpg?alt=media&token=d3411e6a-9975-41fd-b034-612c56d6f8c9"
            alt="hotel marriot santa marta"
          />
        </article>
        <article className="beach-info">
          <h2>Cartagena</h2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fbocagrande.jpg?alt=media&token=d029ac5b-ee1d-4991-906a-cb52ae8d29d9"
            alt="Bocagrande"
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
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fcholon.jpg?alt=media&token=e80fbc85-774c-4c20-b923-b8db82c111db"
            alt="Bocagrande"
          />
          <p>
            Like San Andres, Santa Marta has many hotels and cabins that combine
            comfort and nature.
          </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Frio-claro.jpg?alt=media&token=60362310-724d-4dc9-8edc-bb215261c4ff"
            alt="PLAYA Barú"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fca%C3%B1on-rio-claro.jpg?alt=media&token=36e8261f-552c-451a-9af4-130dff71a443"
            alt="hotel Charleston Santa Teresa"
          />
        </article>
      </section>
    </div>
  );
};

export default Rivers;
