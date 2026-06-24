import { FaPlus } from "react-icons/fa6";
import "./ProductCard.css";

function ProductCard({
  name,
  description,
  price,
  image,
}: {
  name: string;
  description: string;
  price: number;
  image: string;
}) {
  return (
    <article className="product-card">
      <a href="#" className="product-image-link">
        <img src={image} loading="lazy" className="product-image" />
      </a>

      <div className="product-body">
        <h3 className="product-title">{name}</h3>

        <p className="product-description">{description}</p>
      </div>
      <footer className="product-footer">
        <div className="product-price">R$ {price}</div>
        <button
          type="button"
          aria-label="Adicionar amigurumi ao carrinho"
          className="btn-icon-buy"
        >
          <FaPlus className="icon-plus" aria-hidden="true" />
        </button>
      </footer>
    </article>
  );
}

export default ProductCard;
