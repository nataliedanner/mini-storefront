'use client';

export default function StatusMessage({ loading, error, items}) {
    if (loading) {
        return
        <p> Loading products</p>
    }
    if (error) {
        return 
        <p> Error: {error}</p>
    }
    if (items.length === 0) {
        return
        <p> No products found.</p>
    }
    return null;
}
