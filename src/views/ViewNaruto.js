import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import Card from "../components/Card";
import "../components/css/card.css";

function ViewNaruto() {
  const animes = [
    {
      anime: "Naruto Shippuden",
      personaje: "Naruto Uzumaki",
      img: image1,
      text: "Naruto Uzumaki es el personaje protagonista del manga y anime Naruto, creado por el mangaka Masashi Kishimoto. En un principio, Kishimoto quería crear un personaje que resultara «simple y estúpido», aunque luego lo dotó con un «pasado oscuro» para, según sus propias palabras, volverlo único.",
    },
    {
      anime: "Naruto Shippuden",
      personaje: "Sasuke Uchiha",
      img: image2,
      text: "Sasuke Uchiha es un personaje ficticio de la serie de manga y anime Naruto, creada por el mangaka Masashi Kishimoto. Inicialmente, el autor no tenía intenciones de crear a Sasuke, pero tras consultarlo con su editor, decidió concebir un rival para el protagonista principal de la obra, Naruto Uzumaki, lo que conllevó a la creación de este.",
    },
    
    
  ];
  return (
    <div className="row">
      {animes.map((personaje) => (
        <div className="col col-md-6">
          <Card
            title={personaje.personaje}
            text={personaje.text}
            img={personaje.img}
          ></Card>
        </div>
      ))}
    </div>
  );
}

export default ViewNaruto;
