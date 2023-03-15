import React from "react";

const experienceContent = [
  {
    year: "2022 - Presente",
    position: "Engenheiro de Software Semi-Sênior",
    compnayName: "Mercado Livre Brasil",
    details: "Desenvolvimento e implementação de recursos dentro do CloudController para controle e gerenciamento de contas com AWS e GCP. Utilização de Terraform para criação de infraestrutura e educação da equipe em DevOps.",
    },
    {
    year: "2022 - Presente",
    position: "Tutor de SQL",
    compnayName: "Coderhouse Brasil",
    details: "Tutoria de SQL e MySQL na Coderhouse Brasil.",
    },
    {
    year: "2021 - 2022",
    position: "Site Reability Engineer",
    compnayName: "Afterverse",
    details: "Desenvolvimento de infraestrutura e monitoramento de serviços com Terraform, Jenkins, ArgoCD, Kubernetes, AWS/Digital Ocean e Github Actions.",
    },
    {
    year: "2020 - 2021",
    position: "Desenvolvedor de Software",
    compnayName: "Itaú Unibanco",
    details: "Automação de infraestrutura para lidar com incidentes, integração de ferramentas de fornecedores com ferramentas internas, construção de APIs e design de monitoramento de aplicativos.",
    },
    {
    year: "2019 - 2020",
    position: "Estagiário em Desenvolvimento de Software",
    compnayName: "Itaú Unibanco",
    details: "Desenvolvimento de automações usando Python.",
    },
    ];
const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
