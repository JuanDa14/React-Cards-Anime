import React from "react";
import "./css/PageAnime.css";
import "animate.css";
function PageAnime() {
  const animes = [
    {
      title: "Naruto Shippuden",
      text: "Naruto quiere ser el mejor ninja en la tierra. La acción comienza tras los dos años y medio que el protagonista, Naruto Uzumaki, ha pasado entrenando con su maestro Jiraiya. En ella reaparecen todos los personajes de la serie anterior pero con más experiencia y fuerza. Además, la Organización Akatsuki entra en acción, tras su breve aparición en la parte anterior, y se revelan sus objetivos.",
      img: "https://wallpaperaccess.com/full/677430.jpg",
      url: "/naruto",
    },
    {
      title: "Dragon Ball Z",
      text: "Dragon Ball Z (Japanese: ドラゴンボールZ, Hepburn: Doragon Bōru Zetto, commonly abbreviated as DBZ) is a Japanese anime television series produced by Toei Animation. Part of the Dragon Ball media franchise, it is the sequel to the 1986 Dragon Ball anime series and adapts the latter 325 chapters of the original Dragon Ball manga series created by Akira Toriyama, which ran in Weekly Shōnen Jump from 1988 to 1995. The series aired in Japan on Fuji TV from April 1989 to January 1996 and was later dubbed for broadcast in at least 81 countries worldwide.",
      img: "https://k60.kn3.net/taringa/A/E/F/D/A/6/vocho2222/E15.jpg",
      url: "/dragonball",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {animes.map((anime) => (
          <div className="col col-md-6">
            <div className="card text-center bg-dark animate__animated animate__fadeInUp">
              <a href={anime.url}>
                <img className="card-img-top img-edit" alt="" src={anime.img} />
              </a>
              <div className="card-body text-light">
                <h4 className="card-title">{anime.title}</h4>
                <p className="card-text">{anime.text}</p>
                <a href={anime.url} className="btn btn-outline-danger">
                  Ver Personajes
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageAnime;
