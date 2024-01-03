import { Link } from "react-router-dom";
import clasess from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={clasess.header}>
    <nav>
        <ul className={clasess.list}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
    </nav>
  </header>
  );
  
};

export default MainNavigation;
