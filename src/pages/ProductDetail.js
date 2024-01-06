import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1> product detail</h1>
      <p>product number {params.productId}</p>
      <p><Link to='..' relative='path'>Back</Link></p>
    </>
  );
};

export default ProductDetailPage;
