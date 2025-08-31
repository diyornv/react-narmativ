import React from "react";
import { useWishlist } from "../context/WishlistContext";
import trashIcon from "../assets/svg/trash.svg";
import cartIcon from "../assets/svg/cart-white.svg";

const WishlistItem = ({ product, onRemove, onAddToCart }) => {
  return (
    <div className="w-full group">
      <div className="relative bg-[#F5F5F5] w-full h-[250px] flex items-center justify-center rounded overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[180px] object-contain"
        />

        {product.discountPercent && (
          <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#DB4444] text-white text-[12px] font-medium">
            -{product.discountPercent}%
          </div>
        )}

        <button
          onClick={() => onRemove(product.id)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center"
        >
          <img
            src={trashIcon}
            alt="remove"
            className="w-4 h-4 cursor-pointer"
          />
        </button>

        <div className="absolute left-0 right-0 bottom-0">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-black text-white py-2 rounded-b flex items-center justify-center gap-2 cursor-pointer"
          >
            <img src={cartIcon} alt="cart" className="w-4 h-4" />
            Add To Cart
          </button>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-[16px] leading-[24px] font-semibold line-clamp-2 mb-2">
          {product.title}
        </h3>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-[#DB4444] font-medium">${product.price}</span>
          {product.oldPrice && (
            <span className="text-[#808080] line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Wishlist = () => {
  const { wishlist, removeFromWishlist, moveAllToCart } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container py-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Start adding products to your wishlist to see them here
            </p>
            <a
              href="/"
              className="inline-block bg-[#DB4444] text-white px-6 py-3 rounded"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-20">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            Wishlist ({wishlist.length})
          </h1>
          <button
            onClick={moveAllToCart}
            className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-red-600 transition-colors"
          >
            Move All To Bag
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <WishlistItem
              key={product.id}
              product={product}
              onRemove={removeFromWishlist}
              onAddToCart={(product) => {
                console.log("Adding to cart:", product);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
