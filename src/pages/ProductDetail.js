import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1> product detail</h1>
      <p>product number {params.productId}</p>
    </>
  );
};

export default ProductDetailPage;
