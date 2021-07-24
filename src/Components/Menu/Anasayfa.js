import React from "react";

function Anasayfa() {
  return (
    <div className="jumbotron">
      <h1 className="display-4 bg-warning text-dark">
        Merhaba Eray burası Anasayfa{" "}
      </h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p className="lead">
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <a className="btn btn-danger btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
}

export default Anasayfa;
