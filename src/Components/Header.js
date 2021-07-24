import React, { useState } from "react";

function Header() {
  let [changeName, changeAutorized] = useState(false);

  return (
    <div className="header_content">
      <div className="header_content_menu">
        <ul className="header_content_menu_ul">
          <li className="header_content_menu_ul_li">Anasayfa</li>
          <li className="header_content_menu_ul_li">Hakkımızda</li>
          <li className="header_content_menu_ul_li">Galeri</li>
          <li className="header_content_menu_ul_li">İletişim</li>
        </ul>
      </div>

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
