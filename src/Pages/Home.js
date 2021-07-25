import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link className="btn btn-success m-3" to="/">
        Home
      </Link>
      <Link className="btn btn-success m-3" to="/About">
        About
      </Link>
      <Link className="btn btn-success m-3" to="/Contact">
        Contact
      </Link>

      <hr />
      <h1 className="alert alert-success text-bold">Burası Anasayfa</h1>
    </div>
  );
}
