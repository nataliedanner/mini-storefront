'use client';
import { useEffect, useState } from 'react';
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList"

export default function Catalog() {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')

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
            <ProductList products={products} selectedCategory={selectedCategory}/>
        </div>
    );
}
