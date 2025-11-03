'use client';
import { useEffect, useState } from 'react';
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList"
import PriceFilter from "./PriceFilter"
import CartSummary from "./CartSummary"
import StatusMessage from "./StatusMessage"

export default function Catalog() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1200});
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const handleAddToCart = (product) => {
        setCartItems((prev) => [...prev, product])

        setProducts((prevProducts) =>
        prevProducts.map((p) =>
        p.id === product.id && p.stock > 0
    ? {...p, stock: p.stock -1}
    : p
        )
    );
    };


    const handleRemoveItem = (index) => {
        setCartItems((prev) => prev.filter((_, i) => i !== index));
    };

    const handleResetCart = () => {
        setCartItems([]);
    };

    useEffect(() => {
        setLoading(true);
        fetch('./api/products')
        .then((r) => {
            if (!r.ok) throw new Error("Failed to fetch products");
            return r.json();
        })
        .then((data) => {
        setProducts(data);
        setError('');

        })
        .catch((err) => {
            setError(err.message);
            setProducts([])
        })
        .finally(() => setLoading(false));
},  []);

    return (
        <div>
            <h1> Products </h1>
            <CategoryFilter
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory}
                />
            
            <PriceFilter
                minPrice={priceRange.min}
                maxPrice={priceRange.max}
                onMinChange={setPriceRange}
                onMaxChange={setPriceRange} />
            
            <StatusMessage loading={loading} error={error} items={products} />

            <ProductList products={products} selectedCategory={selectedCategory} priceRange={priceRange} onAddToCart={handleAddToCart}/>
            <br/>
            <CartSummary items={cartItems} onRemoveItem={handleRemoveItem} onResetCart={handleResetCart}/>
        </div>
    );
}
