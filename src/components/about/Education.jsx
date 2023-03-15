import React from "react";

const educationContent = [
  {
    year: "2022",
    degree: "TCC - Trabalho de conclusao de curso",
    institute: "UNICAMP",
    details: "Programa de Iniciação Tecnológica na UNICAMP, com foco em desenvolvimento de sistemas de informação."
  },
  {
    year: "2017 - 2021",
    degree: "Sistemas de Informação",
    institute: "Universidade Estadual de Campinas (UNICAMP)",
    details: "Curso de graduação em sistemas de informação na UNICAMP, uma das principais universidades brasileiras na área de tecnologia e inovação."
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
