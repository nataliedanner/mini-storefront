'use client';

export default function ProductList( {products, selectedCategory, priceRange} ) {
    const filtered = products.filter((p) => {
        const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
        const matchesPrice = p.price >=priceRange.min && p.price <= priceRange.max;
        return matchesCategory && matchesPrice
    })

    return (
        <div>
            <ul>
                {filtered.map((product) => (
                <li key={product.id}> {product.name}: ${product.price}</li>
                ))}
            </ul>
        </div>
    )
}