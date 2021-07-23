import React, { useState } from "react";

function Header() {
  let [changeName, changeAutorized] = useState(false);
  const title = "user App";

  return (
    <div className="header_content">
      <p>Burası Header Componenti</p>
      <h1>{title}</h1>
      {changeName ? (
        <p className="lead text-white text-bold">Authorized</p>
      ) : (
        <p className="lead text-danger text-bold">not Authorized</p>
      )}
      <button
        // onClick={() => changeAutorized(!changeName)}
        onClick={() => changeAutorized(!changeName)}
        className="btn btn-success m-3"
      >
        Tıkla ve değiştir
      </button>
    </div>
  );
}

export default Header;
