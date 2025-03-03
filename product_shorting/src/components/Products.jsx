import PropTypes from "prop-types";

const Products = ({ filteredProducts }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <strong>Price:</strong> ${product.price}{" "}
                    <span className="text-danger">
                      (-{product.discountPercentage}%)
                    </span>
                  </p>
                  <p className="card-text">
                    <strong>Rating:</strong> ⭐ {product.rating}
                  </p>
                  <p className="card-text">
                    <strong>Tags:</strong>{" "}
                    {product.tags.map((tag, index) => (
                      <span key={index} className="badge bg-secondary me-1">
                        {tag}
                      </span>
                    ))}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products match your filters.</p>
        )}
      </div>
    </div>
  );
};

Products.propTypes = {
  filteredProducts: PropTypes.array.isRequired,
};

export default Products;
