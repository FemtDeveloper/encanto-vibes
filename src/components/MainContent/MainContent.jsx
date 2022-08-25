import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import ContactForm from "../ContactForm";
import "./MainContent.css";

const MainContent = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "80px",
      duration: 2500,
      reset: true,
    });
    sr.reveal(".title-container, p, figure, h2, .contact-container", {
      delay: 100,
      scale: 0.8,
      // interval: 100,
      // opacity: 0.8,
    });
  }, []);

  return (
    <main className="home-container" id="main">
      <div className="title-container">
        <h1>Colombia</h1>
        <p>
          Colombia has many places for doing tourism, you can have all kind of
          plans in the same country. It has beatiful beaches, amazing rivers and
          great mountains. Its people is kind and they will make you feel like
          family.
        </p>
      </div>
      <hr />
      <section>
        <article className="mode">
          <div className="description-container">
            <h2 id="main">Beaches</h2>
            <p>
              Due to its location in the extreme north of South America,
              Colombia has coasts on the Caribbean Sea and the Pacific Ocean.
              The most popular beaches are located in the Caribbean.
            </p>
          </div>

          <Link to="/beaches">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fbar%C3%BA.jpg?alt=media&token=657fd882-d6b3-412d-b69c-3a3a030cac16"
                alt=""
              />{" "}
              <figcaption>Isla Barú, Bolivar</figcaption>
            </figure>
          </Link>
        </article>
        <hr />
        <article className="mode">
          <div className="description-container">
            <h2 id="main">Mountains</h2>
            <p>
              Likewise, the country has the completion of the Andes mountain
              range in the north and the Sierra Nevada de Santa Marta. In its
              mountains we can visit snow-capped mountains, moors, towns and
              coffee plantations
            </p>
          </div>
          <Link to="/mountains">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fguatap%C3%A9.jpg?alt=media&token=7d06a8ad-a9e3-484d-9226-694e99025d78"
                alt=""
              />{" "}
              <figcaption>Peñon de Guatapé, Antioquia</figcaption>
            </figure>
          </Link>
        </article>
        <hr />
        <article className="mode">
          <div className="description-container">
            <h2 id="main">Rivers</h2>
            <p>
              Colombia has exceptional water wealth, six times higher than the
              world average and three times higher than that of Latin America.
              Our country is one of the countries in the world with the largest
              number of ecosystems that produce water. Many of them are tourist
              from their source to their mouth in the sea.
            </p>
          </div>
          <Link to="/rivers">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Frio-claro-main.jpg?alt=media&token=551b95a1-512e-4690-a057-c6778fa87cf6"
                alt=""
              />{" "}
              <figcaption>Rio Claro, Antioquia</figcaption>
            </figure>
          </Link>
        </article>
      </section>
      <article id={"aboutUs"}>
        <h2>About Us</h2>
        <p>
          We are a non-profit organization that seeks to promote tourism in
          Colombia, promoting local businesses and the charisma of our people.
          We believe that tourism generates income to improve the quality of
          life of the inhabitants of each region.
        </p>
      </article>
      <ContactForm />
    </main>
  );
};

export default MainContent;
