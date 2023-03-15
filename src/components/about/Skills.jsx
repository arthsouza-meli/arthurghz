import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "Python" },
  { skillClass: "p85", skillPercent: "85", skillName: "PowerShell" },
  { skillClass: "p80", skillPercent: "80", skillName: "ShellScript" },
  { skillClass: "p100", skillPercent: "100", skillName: "API RESTful" },
  { skillClass: "p70", skillPercent: "70", skillName: "Splunk" },
  { skillClass: "p65", skillPercent: "65", skillName: "Terraform" },
  { skillClass: "p60", skillPercent: "60", skillName: "Jenkins" },
  { skillClass: "p55", skillPercent: "55", skillName: "ArgoCD" },
  { skillClass: "p50", skillPercent: "50", skillName: "Kubernetes" },
  { skillClass: "p45", skillPercent: "45", skillName: "AWS" },
  { skillClass: "p40", skillPercent: "40", skillName: "Digital Ocean" },
  { skillClass: "p35", skillPercent: "35", skillName: "GitHub Actions" },
  { skillClass: "p30", skillPercent: "30", skillName: "Docker" },
  { skillClass: "p25", skillPercent: "25", skillName: "Microsoft Orchestrator" },
  { skillClass: "p20", skillPercent: "20", skillName: "PK XD universe" },
  { skillClass: "p15", skillPercent: "15", skillName: "Linux operating system" },
  { skillClass: "p10", skillPercent: "10", skillName: "POSIX Threads library" },
  { skillClass: "p25", skillPercent: "25", skillName: "HTML" },
{ skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
{ skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  ];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
