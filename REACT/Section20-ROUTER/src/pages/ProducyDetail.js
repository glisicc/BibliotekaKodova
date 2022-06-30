import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Product detail</h1>
      {params.productId}
    </section>
  );
};
export default ProductDetail;
