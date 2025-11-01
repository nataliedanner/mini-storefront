'use client';

export default function CategoryFilter( {selectedCategory, setSelectedCategory} ) {
    const categories = ["Electronics", "Furniture", "Kitchen"];
    
    return (
        <div id="category-filter">
            <h2> Filter by Category</h2>
            {categories.map(category => (
                <label key={category}>
                <input id="categories" type="radio" value={category} checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}/>
                {category}
                </label>
            ))}
        </div>
    );
}