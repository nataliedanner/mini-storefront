'use client';

export default function ProductCard({product, onAddToCart}) {
    const isOutOfStock = product.stock === 0;

    return (
        <div id="list-contents">
            <ul id="product-list">
                <li id="product-card" key={product.id}> 
                <p>{product.name}: ${product.price}</p>
                <p> Stock: {product.stock} </p>
                {isOutOfStock ? (
                    <div> Out of Stock</div>
                ) : (
                <button id="addcart" onClick={() => onAddToCart(product)}> Add to Cart</button>
                )}
                </li>
                </ul> 
            <br/>
            </div>
    );
}