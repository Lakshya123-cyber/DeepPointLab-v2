import "./product.css";

const Product = ({ para, heading }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle p-red"></div>
        <div className="p-circle p-yell"></div>
        <div className="p-circle p-green"></div>
      </div>
      <h3 className="p-head">{heading}</h3>
      <p className="p-para">{para}</p>
    </div>
  );
};

export default Product;
