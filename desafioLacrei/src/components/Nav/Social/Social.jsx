import { Link } from "react-router-dom";

function Social() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src="" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/user">
              <img src="" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/profissional">
              <img src="" alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Social;
