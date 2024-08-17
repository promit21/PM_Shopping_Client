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
        <img className="h-80 w-96"
          src={productImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {productName}
          <div className="badge bg-yellow-400">{brandName}</div>
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
