'use client';


export default function ProductList( {products, selectedCategory, priceRange, onSend} ) {
    const filtered = products.filter((p) => {
        const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
        const matchesPrice = p.price >=priceRange.min && p.price <= priceRange.max;
        return matchesCategory && matchesPrice
    })

    return (
        <div>
            <ul>
                {filtered.map((product) => (
                <li id="product-card" key={product.id}> {product.name}: ${product.price}
                <br/> <button onClick={() => onSend(`{product.name} added to cart`)}> Add to Cart</button></li>
                ))}
            </ul>
            <br/>
        </div>
    )
}