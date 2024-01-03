import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>This is the homepage</h1>
      <p>
        Go to <Link to="/products">products page</Link>
      </p>
    </>
  );
};

export default HomePage;
