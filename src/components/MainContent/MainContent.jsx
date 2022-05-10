import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import "./MainContent.css";

const MainContent = () => {
  useEffect(() => {
    const sr = ScrollReveal({
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
          <h2 id="main">Beaches</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            numquam maxime a rem autem quibusdam qui ullam natus minima. Tenetur
            ab aliquam quod in. Explicabo exercitationem in accusamus minima
            fugit.
          </p>
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
          <h2 id="main">Mountains</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            delectus. Modi, eum atque, iste aliquam accusantium adipisci vel
            alias iure quidem pariatur inventore labore quaerat, quam autem.
            Vitae, labore nostrum?
          </p>
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
          <h2 id="main">Rivers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            vero aliquid labore ut officiis obcaecati, enim laudantium ducimus
            magnam qui corporis vitae eligendi commodi accusantium dicta, fugit
            perferendis nemo dolorum?
          </p>
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
    </main>
  );
};

export default MainContent;
