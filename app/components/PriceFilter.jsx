'use client';

export default function PriceFilter({ minPrice, maxPrice, onMinChange, onMaxChange }) {
    const handleMinChange = (e) => {
        onMinChange((prev => ({...prev, min: Number(e.target.value) })))
    };

    const handleMaxChange = (e) => {
        onMaxChange((prev) => ({...prev, max: Number(e.target.value)}))
    };
    
    return (
        <div id="price-filter">
            <h2> Filter by Price</h2>
            <label>
                Min Price: <input id="price-input" type="number" value={minPrice} onChange={(handleMinChange)} placeholder="Min"
                />
            </label>
            <label>
                Max Price: <input id="price-input" type="number" value={maxPrice} onChange={handleMaxChange} placeholder="Max"
                />
            </label>
        </div>
    )
}