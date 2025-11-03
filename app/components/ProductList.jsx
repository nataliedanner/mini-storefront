'use client';


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
                <li id="product-card" key={product.id}> {product.name}: ${product.price}
                <br/> <button id="addcart" onClick={() => onAddToCart(product)}> Add to Cart</button></li>
                ))}
            </ul>
            <br/>
        </div>
    )
}