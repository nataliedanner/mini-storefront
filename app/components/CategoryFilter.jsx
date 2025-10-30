
export default function CategoryFilter( {selectedCategories, onCategoryChange} ) {
    const categories = ["Electronics", "Furniture", "Kitchen"];
    return (
        <div>
            <h2> Filter by Category</h2>
            {categories.map(category => (
                <label key={category}>
                <input type="checkbox" value={category}/>
                {category}
                </label>
            ))}
        </div>
    );
}