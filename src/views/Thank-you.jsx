import React from "react";
import { Link } from "react-router-dom";
import image404 from "../assets/img/404.jpg";

const ThankYou = () => {
  return (
    <div className="error_page">
      <div
        className="hero bg-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + image404})`,
        }}
      >
        <div className="content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            Obrigado ! 
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            Entraremos em contato em breve !! 
          </p>

          <div
            className="button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Link to="/">Voltar a pagina Inicial</Link>
          </div>
          {/* End purchase_button */}
        </div>
      </div>
      {/* End .hero */}
    </div>
  );
};

export default ThankYou;
