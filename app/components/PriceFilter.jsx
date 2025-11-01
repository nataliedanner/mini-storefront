'use client';

export default function PriceFilter({ minPrice, maxPrice, onMinChange, onMaxChange }) {
    const handleMinChange = (e) => {
        onMinChange((prev => ({...prev, min: Number(e.target.value) })))
    };

    const handleMaxChange = (e) => {
        onMaxChange((prev) => ({...prev, max: Number(e.target.value)}))
    };
    
    return (
        <div>
            <h2> Filter by Price</h2>
            <label>
                Min Price: <input type="number" value={minPrice} onChange={(handleMinChange)} placeholder="Min"
                />
            </label>
            <label>
                Max Price: <input type="number" value={maxPrice} onChange={handleMaxChange} placeholder="Max"
                />
            </label>
        </div>
    )
}