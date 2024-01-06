import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>This is the homepage</h1>
      <p>
        Go to <Link to="products">products page</Link>
      </p>
      <button onClick={navigateHandler}>Go</button>
    </>
  );
};

export default HomePage;
