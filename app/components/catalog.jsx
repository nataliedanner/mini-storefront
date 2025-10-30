'use client';
import { useEffect, useState } from 'react';

export default function Catalog() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./api/products')
        .then(r => r.json())
        .then(setProducts)
        .catch(console.error);
},  []);

    return (
        <ul>
            {products.map(p => (
                <li key={p.id}> {p.name}: {p.price}</li>
            ))}
        </ul>
    );
}
