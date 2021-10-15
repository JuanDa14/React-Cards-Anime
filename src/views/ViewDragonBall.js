import React from "react";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import Card from "../components/Card";

function ViewDragonBall() {
  const animes = [
    {
      anime: "Dragon Ball Z",
      personaje: "Goku SSJ",
      img: image3,
      text: "Son Gokū es un personaje ficticio, protagonista de la serie de manga y anime Dragon Ball. Fue creado por Akira Toriyama en 1984. Al comienzo de la historia, Gokū aparece como un niño que practica las artes marciales y que posee una cola de mono y una fuerza sobrehumana, pero más adelante se revela que es un extraterrestre de la raza ficticia saiyajin, y que su nombre original es Kakarotto",
    },
    {
      anime: "Dragon Ball Z",
      personaje: "Vegetta SSJ Blue Evolution",
      img: image4,
      text: "Vegeta, también conocido como Principe Vegeta o alternativamente con el estilo Vegeta IV es un personaje de ficción de la franquicia Dragon Ball creado por Akira Toriyama. Vegeta aparece por primera vez en el capítulo #204 Sayonara, Son Goku, publicado en la revista Weekly Shōnen Jump el 7 de noviembre de 1988, buscando las esferas del Dragón que conceden deseos para ganar la inmortalidad.",
    },
  ];

  return (
    <div className="row">
      {animes.map((personaje) => (
        <div className="col-md-6 ">
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

export default ViewDragonBall;
