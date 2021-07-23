import React, { useState } from "react";

function Body() {
  const [userList, setArr] = useState([
    { id: 1, name: "Muslum Dogan", email: "muslumdogan01@gmail.com" },
    { id: 2, name: "Tugay Balcı", email: "Tugay@gmail.com" },
    { id: 3, name: "Eray Gündoğdu", email: "Eray@gmail.com" },
    { id: 4, name: "Emre Dalcı", email: "Emre@gmail.com" },
  ]);
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <p>Burası Body componenti</p>
      <button className="btn btn-danger m-3" onClick={() => setOpen(!isOpen)}>
        Listeyi Göster
      </button>
      <div>
        {isOpen &&
          userList.map((item) => (
            <li key={item.id} className="userList">
              <span>Name : {item.name}</span>
              <span>e-mail : {item.email}</span>
            </li>
          ))}
      </div>
    </div>
  );
}

export default Body;
