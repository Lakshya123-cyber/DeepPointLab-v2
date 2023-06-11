import Product from "../product/Product";
import "./productList.css";
import { services } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Services</h1>
        <p className="pl-desc">
          Comprehensive tech consultancy services for all your business needs.
          From software development to cybersecurity, we help you leverage
          technology to stay ahead and outperform your competition.
        </p>
      </div>
      <div className="pl-list">
        {services.map((item) => (
          <Product key={item.id} para={item.para} heading={item.heading} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
