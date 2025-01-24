import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/rooms">Номери</Link>
          </li>
          <li>
            <Link to="/contacts">Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
