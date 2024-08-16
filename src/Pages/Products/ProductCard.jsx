const ProductCard = ({ product }) => {
  const {
    productName,
    brandName,
    productImage,
    description,
    price,
    category,
    ratings,
    productCreationDate,
  } = product;
  return (
    <div className="card bg-base-100 w-96 shadow-xl max-md">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {productName}
          <div className="badge badge-secondary">{brandName}</div>
        </h2>
        <p>{description}</p>
        <p>$ {price}</p>
        <p>Rating: {ratings}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{productCreationDate}</div>
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
