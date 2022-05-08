import React from "react";
import { Link } from "react-router-dom";
import "./MainContent.css";

const MainContent = () => {
  return (
    <main className="home-container" id="main">
      <h1>Colombia</h1>
      <p>
        Colombia has many places for doing tourism, you can have all kind of
        plans in the same country. It has beatiful beaches, amazing rivers and
        great mountains. Its people is kind and they will make you feel like
        family.
      </p>
      {/* <hr /> */}
      <Link to="/beaches">
        <h2 id="main">Beaches</h2>
        <figure>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fbar%C3%BA.jpg?alt=media&token=657fd882-d6b3-412d-b69c-3a3a030cac16"
            alt=""
          />{" "}
          <figcaption>Isla Barú, Bolivar</figcaption>
        </figure>
      </Link>
      <hr />
      <Link to="/mountains">
        <h2 id="main">Mountains</h2>
        <figure>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Fguatap%C3%A9.jpg?alt=media&token=7d06a8ad-a9e3-484d-9226-694e99025d78"
            alt=""
          />{" "}
          <figcaption>Peñon de Guatapé, Antioquia</figcaption>
        </figure>
      </Link>
      <hr />
      <Link to="/rivers">
        <h2 id="main">Rivers</h2>
        <figure>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2Frio-claro-main.jpg?alt=media&token=551b95a1-512e-4690-a057-c6778fa87cf6"
            alt=""
          />{" "}
          <figcaption>Rio Claro, Antioquia</figcaption>
        </figure>
      </Link>
    </main>
  );
};

export default MainContent;
