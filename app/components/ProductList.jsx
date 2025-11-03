'use client';

import ProductCard from "./ProductCard"


export default function ProductList( {products, selectedCategory, priceRange, onAddToCart} ) {
    const filtered = products.filter((p) => {
        const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
        const matchesPrice = p.price >=priceRange.min && p.price <= priceRange.max;
        return matchesCategory && matchesPrice
    })

    return (
        <div id="list-contents">
            <ul id="product-list">
                {filtered.map((product) => (
               <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
            </ul>
            <br/>
        </div>
    )
}
