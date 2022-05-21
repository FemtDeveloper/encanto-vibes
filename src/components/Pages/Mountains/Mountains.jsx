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
              href="https://www.valledelcocora.com.co/"
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
                <h3>Valle Del Cocorá</h3>
              </div>
            </a>
            <a
              href="https://www.parquesnacionales.gov.co/portal/es/ecoturismo/parques/region-andina/parque-nacional-natural-los-nevados/"
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
                <h3>Nevado del Ruiz</h3>
              </div>
            </a>
            <a
              href="https://humedalesbogota.com/paramo-de-chingaza/"
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
                <h3>Páramo de Chingaza</h3>
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
          Colombia has ramifications of the Andes mountain range that gives us
          different thermal floors, in them there are lagoons, paramos, river
          sources. Also, in the north we find the Sierra Nevada de Santa Marta,
          which has the highest mountain in Colombia.
        </p>
        <article className="beach-info">
          <hr />
          <div className="description-container">
            <div>
              <h2>Sierra Nevada de Santa Marta</h2>
              <figure>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fsierra-nevada1.jpg?alt=media&token=176dba2c-40a7-4210-a8ff-d61f03a9ef69"
                  alt="Siera-nevada"
                  onClick={handleModalImage}
                />
                <figcaption>Sierra Nevada</figcaption>
              </figure>
            </div>
            <p>
              <strong>The Sierra Nevada de Santa Marta</strong> is the highest
              coastal mountain in the world, it has indigenous populations,
              archaeological landscapes, different species of animals and at its
              base it has paradisiacal beaches.
            </p>
          </div>
          <div className="description-container">
            <p>
              You can get to Santa Marta and contact several tourist agencies
              that will show you all the plans to do in this wonderful place.
            </p>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fsierra-nevada2.jpg?alt=media&token=01811a03-55bf-4c46-a419-bce64de425db"
                alt="pueblo kogui"
                onClick={handleModalImage}
              />
              <figcaption>Pueblo indígena Kogui</figcaption>
            </figure>
          </div>
          <div className="description-container">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fciudad-perdida.jpg?alt=media&token=c69e77e7-d182-4532-8e29-da55e287c297"
                alt="ciudad perdida"
                onClick={handleModalImage}
              />
              <figcaption>Ciudad Perdida</figcaption>
            </figure>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fsierra-nevada3.jpg?alt=media&token=430e8d82-2494-4c16-aef0-32d84072f4aa"
                alt="Sierra nevada malla"
                onClick={handleModalImage}
              />
              <figcaption>Glamping Sierra Nevada</figcaption>
            </figure>
          </div>
        </article>
        <article className="beach-info">
          <hr />
          <div className="description-container">
            <div>
              <h2>Eje Cafetero</h2>
              <figure>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Feje-cafetero.jpg?alt=media&token=039415b1-7a91-45b0-b175-8e4bc10ae81f"
                  alt="bahía"
                  onClick={handleModalImage}
                />
                <figcaption>Eje Cafetero</figcaption>
              </figure>
            </div>
            <p>
              Colombia is known throughout the world for its excellent coffee.
              This is produced mainly in the departments of{" "}
              <strong>Quindio, Risaralda, Tolima, Caldas and Huila</strong>. In
              these places you will find farms, towns and houses that still
              preserve their beautiful colonial architecture.
            </p>
          </div>
          <div className="description-container">
            <p>
              You can visit farms and learn how the coffee you drink in your
              country is produced, visit theme parks and learn a little about
              the coffee culture, also known for its kindness.
            </p>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fbalcones-casas.jpg?alt=media&token=7afc0644-9bd6-4c6e-8371-0fb2ea51628f"
                alt="FOTO NEGUANJE"
                onClick={handleModalImage}
              />
              <figcaption>Balcones casas típicas</figcaption>
            </figure>
          </div>
          <div className="description-container">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Ffinca-cafetera.jpg?alt=media&token=548a6e17-c42e-4f56-aa1b-8c13aea59854"
                alt="Finca Cafetera"
                onClick={handleModalImage}
              />
              <figcaption>Finca cafetera</figcaption>
            </figure>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Ffinca-hotel-rancho-san-antonio.jpg?alt=media&token=82f0afd8-7e58-46f6-94fc-b2e462cbb082"
                alt="Rancho San Antonio"
                onClick={handleModalImage}
              />
              <figcaption>Rancho San Antonio</figcaption>
            </figure>
          </div>
        </article>
        <article className="beach-info">
          <hr />
          <div className="description-container">
            <div>
              <h2>Boyacá</h2>
              <figure>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fpuente-de-boyaca.jpg?alt=media&token=38353851-e8ab-4cf7-bef9-72435b80404e"
                  alt="Puente de Boyaca"
                  onClick={handleModalImage}
                />
                <figcaption>Puente de Boyacá</figcaption>
              </figure>
            </div>
            <p>
              <strong>Boyacá</strong>Boyaca has beautiful mountains, crops, and
              colonial towns. It also has many monuments and historical squares
              that remind a little of the times of the revolution.
            </p>
          </div>
          <div className="description-container">
            <p>
              In the region there are also natural parks that have lagoons,
              rivers and waterfalls where you can also do extreme sports.
            </p>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fpuente-del-espa%C3%B1ol-boyaca.jpg?alt=media&token=fd49ec64-a6db-437f-8d2e-7b5f44bd9f7a"
                alt="Puente del español boyacá"
                onClick={handleModalImage}
              />
              <figcaption>Puente del español</figcaption>
            </figure>
          </div>
          <div className="description-container">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Figuaque.jpg?alt=media&token=827aa300-3447-4ca8-a018-050d42359f01"
                alt="Laguna Iguaque"
                onClick={handleModalImage}
              />
              <figcaption>Laguna Iguaque</figcaption>
            </figure>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fduruelo-boyac%C3%A1.jpg?alt=media&token=43943d5f-ad16-423f-8909-40aef9aab146"
                alt="Hospedería Duruelo"
                onClick={handleModalImage}
              />
              <figcaption>Hospedería Duruelo</figcaption>
            </figure>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Mountains;
