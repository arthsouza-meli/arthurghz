import React from "react";


  const personalInfoContent = [
    { meta: "nome", metaInfo: "Arthur Souza" },
    { meta: "idade", metaInfo: "25 anos" },
    { meta: "nacionalidade", metaInfo: "Brasileiro" },
    { meta: "Freelance", metaInfo: "Disponível" },
    { meta: "Endereço", metaInfo: "São Paulo - Brasil" },
    { meta: "telefone", metaInfo: "+55 11 95235-9477" },
    { meta: "Email", metaInfo: "arthur.ghz@icloud.com" },
    { meta: "idiomas", metaInfo: "Português, Inglês e Espanhol" },
    ];
const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
