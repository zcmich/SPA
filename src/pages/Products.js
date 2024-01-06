import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProductPage = () => {
  return (
    <>
      <h1>This is Products page</h1>
      <ul>
        {
        DUMMY_PRODUCTS.map((prod) => (
          <li>
            <Link to={`${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductPage;
