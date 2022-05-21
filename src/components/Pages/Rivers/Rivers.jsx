import React, { useEffect, useState } from "react";
import scrollreveal from "scrollreveal";
import ModalImage from "../../ModalImage/ModalImage";

const Rivers = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2500,
      reset: true,
    });
    sr.reveal(".title-container, p, figure, h2", {
      delay: 200,
      scale: 0.8,
      // interval: 100,
      // opacity: 0.8,
    });
  }, []);
  const [sourceModalImage, setSourceModalImage] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleModalImage = async (e) => {
    console.log(e);
    setSourceModalImage(await e.target.src);
    setIsShowModal(!isShowModal);
  };
  return (
    <div className="regions-container">
      {isShowModal && (
        <ModalImage
          imageSource={sourceModalImage}
          setIsShowModal={setIsShowModal}
        />
      )}
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
                <h3>Caño Cristales</h3>
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
                <h3>Fin del Mundo, Putumayo</h3>
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
                <h3>Norcasia, Quindío</h3>
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
        <h1>Rivers</h1>
        <p>
          Thanks to its snowy peaks and its mountains, Colombia is one of the
          richest countries in the world in terms of fresh water production,
          waterfalls along the route showed us the beauty of its riches
        </p>
        <article className="beach-info">
          <div className="description-container">
            <div>
              <h2>Amazonía and Eastern Plains</h2>
              <figure>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fcano-cristales1.jpg?alt=media&token=4aa67fe2-16c5-4b48-b820-a78423310123"
                  alt="bahía"
                  onClick={handleModalImage}
                />
                <figcaption>Caño Cristales</figcaption>
              </figure>
            </div>
            <p>
              <strong>Caño Cristales</strong>, located in the Serranía de la
              Macarena, also called the river of seven colors is one of the most
              beautiful rivers in Colombia
            </p>
          </div>
          <div className="description-container">
            <div>
              <p>
                <strong>Cascada del Fin del mundo</strong>, Lacated in Mocoa,
                Putumayo, for a long time it was a paradise forgotten by
                Colombians due to the security situation, but once the peace
                agreements were signed, a large number of tourist sites were
                opened to the public that had great beauty.
              </p>
            </div>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Ffin-del-mundo-putumayo.jpg?alt=media&token=712aab4f-a95b-424b-982c-ecf2e138fab5"
                alt="End of the world cascade"
                onClick={handleModalImage}
              />
              <figcaption>End of the World, Putumayo</figcaption>
            </figure>
          </div>
          <div className="description-container">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Famazon-river.jpg?alt=media&token=523e8b2b-d471-4bf2-bf22-8263733c31f7"
                alt="Amazon river"
                onClick={handleModalImage}
              />
              <figcaption>Amazon River</figcaption>
            </figure>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Famazon-hotel.jpg?alt=media&token=164a64f0-407c-483f-a1eb-83799e55bdc1"
                alt="amazon-hotel"
                onClick={handleModalImage}
              />
              <figcaption>Amazon Hotel, Leticia</figcaption>
            </figure>
          </div>
        </article>
        <hr />
        <article className="beach-info">
          <div className="description-container">
            <div>
              <h2>Region Caribe</h2>
              <figure>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fmalecon-del-rio.jpg?alt=media&token=34a5e8c6-4748-4391-bf30-4c09c647579e"
                  alt="Malecon del rio Barranquilla"
                  onClick={handleModalImage}
                />
                <figcaption>Malecón del rio, Barranquilla</figcaption>
              </figure>
            </div>
            <p>
              <strong>The Caribbean region</strong>, north of Colombia and named
              for having its coasts in the Caribbean Sea, is where the largest
              river in Colombia, the Magdalena River, flows through the entire
              country from the south to its mouth in the city of Barranquilla. .
              You can visit the river in different sections where you will find
              a great variety of cultures.
            </p>
          </div>
          <div className="description-container">
            <p>
              You can find rivers that start in the Sierra Nevada de Santa Marta
              and see the crystal clear waters and beautiful landscapes along
              its route.
            </p>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fmompox.jpg?alt=media&token=7587b7d0-b3d2-4625-8024-f9a3940f713e"
                alt="Mompox"
                onClick={handleModalImage}
              />
              <figcaption>Mompox, Bolivar</figcaption>
            </figure>
          </div>
          <div className="description-container">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fpozo-azul.jpg?alt=media&token=72eb9705-3b61-4241-a98d-cbafa74e0a4b"
                alt="Pozo azul "
                onClick={handleModalImage}
              />
              <figcaption>Pozo Azul</figcaption>
            </figure>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fquebrada-valencia.jpg?alt=media&token=ba151b2d-597b-41be-83ca-1c75dc66705e"
                alt="Quebrada valencia santa marta"
                onClick={handleModalImage}
              />
              <figcaption>Quebrada Valencia</figcaption>
            </figure>
          </div>
        </article>
        <hr />
        <article className="beach-info">
          <div className="description-container">
            <div>
              <h2>Eje Cafetero y Antioquia</h2>
              <figure>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Frio-verde-quindio.jpg?alt=media&token=7716ec2f-f4ff-46f2-b9e9-ee9b5fbde5b2"
                  alt="Green River"
                  onClick={handleModalImage}
                />
                <figcaption>Rio Verde, Quindío</figcaption>
              </figure>
            </div>
            <p>
              <strong> Eje Cafetero and Antioquia</strong>, is one of the
              regions with the most rivers in Colombia, being surrounded by
              mountains, this region offers innumerable and beautiful
              landscapes,
            </p>
          </div>
          <div className="description-container">
            <p>
              In this region you can find different plans such as rappelling,
              rafting and hiking.
            </p>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fnorcasia-1.webp?alt=media&token=f9f4b1db-6288-4d04-868b-0c4c6e8e2536"
                alt="Norcasia"
                onClick={handleModalImage}
              />
              <figcaption>Norcasia, Caldas</figcaption>
            </figure>
          </div>
          <div className="description-container">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Frio-claro.jpg?alt=media&token=60362310-724d-4dc9-8edc-bb215261c4ff"
                alt="Río claro 1"
                onClick={handleModalImage}
              />
              <figcaption>Rio Claro</figcaption>
            </figure>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fca%C3%B1on-rio-claro.jpg?alt=media&token=36e8261f-552c-451a-9af4-130dff71a443"
                alt="Rio Claro"
                onClick={handleModalImage}
              />
              <figcaption>Rio claro</figcaption>
            </figure>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Rivers;
