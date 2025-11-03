'use client';
import { useEffect, useState } from 'react';
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList"
import PriceFilter from "./PriceFilter"
import CartSummary from "./CartSummary"

export default function Catalog() {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1200})
    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (product) => {
        setCartItems((prev) => [...prev, product])
    }
    const handleRemoveItem = (index) => {
        setCartItems((prev) => prev.filter((_, i) => i !== index));
    };

    const handleResetCart = () => {
        setCartItems([]);
    };

    useEffect(() => {
        fetch('./api/products')
        .then(r => r.json())
        .then(setProducts)
        .catch(console.error);
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

            <ProductList products={products} selectedCategory={selectedCategory} priceRange={priceRange} onAddToCart={handleAddToCart}/>
            <br/>
            <CartSummary items={cartItems} onRemoveItem={handleRemoveItem} onResetCart={handleResetCart}/>
        </div>
    );
}
