import React, { useEffect, useState } from "react";
import axios from "axios";
import Anasayfa from "./Menu/Anasayfa";
import Hakkimizda from "./Menu/Hakkimizda";
import Galeri from "./Menu/Galeri";
import Iletisim from "./Menu/Iletisim";

// const menu = ["Anasayfa", "Hakkimizda", "galeri", "iletisim"];
const menu = ["Anasayfa", "Hakkımızda", "Galeri", "İletişim"];

function Body() {
  // const [selectedIndex, setSelectedMenu] = useState(0);
  const [selectedIndex, selectedMenu] = useState(0);
  const [userList, setArr] = useState([
    { id: 1, name: "Muslum Dogan", email: "muslumdogan01@gmail.com" },
    { id: 2, name: "Tugay Balcı", email: "Tugay@gmail.com" },
    { id: 3, name: "Eray Gündoğdu", email: "Eray@gmail.com" },
    { id: 4, name: "Emre Dalcı", email: "Emre@gmail.com" },
  ]);
  // const [isOpen, setOpen] = useState(false);

  const [countries, setCountries] = useState([]);
  console.log(countries);
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);
  //   console.log(
  //     countries.map((country) => {
  //       console.log(country.name);
  //     })
  //   );
  return (
    <div>
      {menu.map((list, index) => (
        <a className="menuStyle" onClick={() => selectedMenu(index)}>
          {list}
        </a>
      ))}
      {selectedIndex == 0 && <Anasayfa />}
      {selectedIndex == 1 && <Hakkimizda />}
      {selectedIndex == 2 && <Galeri />}
      {selectedIndex == 3 && <Iletisim />}
      {/* {menu.map((i, index) => (
        <a onClick={() => setSelectedMenu(index)}>{i}</a>
      ))} */}

      {/* {selectedIndex == 2 && <Galeri />}
      {selectedIndex == 3 && <Iletisim } */}
      {/*  <p>Burası Body componenti</p>
      <button className="btn btn-danger m-3" onClick={() => setOpen(!isOpen)}>
        Listeyi Göster
      </button> */}
      {/*  <div>
        {isOpen &&
          userList.map((item) => (
            <li key={item.id} className="userList">
              <span>Name : {item.name}</span>
              <span>e-mail : {item.email}</span>
            </li>
          ))}
      </div>
      <div className="content">

        {countries.map((country) => (
          <div className="card m-3">
            <img className="imgSize" src={country.flag}></img>
            <div className="card-body">
              <h2 className="card-title">{country.name}</h2>
              <h5 className="card-subtitle mt-2 text-muted">
                {country.capital}
              </h5>
              <h6 className="card-title mt-2">{country.subregion}</h6>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Body;
