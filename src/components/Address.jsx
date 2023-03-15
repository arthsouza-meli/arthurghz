import React from "react";

const Address = () => {
return (
<>
<p className="open-sans-font custom-span-contact position-relative">
<i className="fa fa-map position-absolute"></i>
<span className="d-block">Endereço</span> São Paulo - Brasil
</p>
{/* End .custom-span-contact */}

  <p className="open-sans-font custom-span-contact position-relative">
    <i className="fa fa-envelope-open position-absolute"></i>
    <span className="d-block">E-mail</span>{" "}
    <a href="mailto:arthur.ghz@icloud.com">arthur.ghz@icloud.com</a>
  </p>
  {/* End .custom-span-contact */}

  <p className="open-sans-font custom-span-contact position-relative">
    <i className="fa fa-phone-square position-absolute"></i>
    <span className="d-block">Telefone</span>{" "}
    <a href="Tel: +5511952359477">+55 11 95235-9477</a>
  </p>
  {/* End .custom-span-contact */}
</>
);
};

export default Address;