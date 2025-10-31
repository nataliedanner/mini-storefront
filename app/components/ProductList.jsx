'use client';
import { useEffect, useState } from 'react';

export default function ProductList( {products, selectedCategory} ) {
    const filtered = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

    return (
        <div>
            <ul>
                {filtered.map((product) => (
                <li key={product.id}> {product.name}: {product.price}</li>
                ))}
            </ul>
        </div>
    )
}