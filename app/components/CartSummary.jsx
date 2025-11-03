'use client';

export default function CartSummary({ items, onRemoveItem, onResetCart }) {
    const itemCount = items.length;
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0)
    return (
        <div id="cart">
            <h2 id="summary"> Cart Summary </h2>
            <p> Items in cart: {itemCount}</p>
            <p> Total price: ${totalPrice.toFixed(0)} </p>
            <hr/>
                <ul>
                {items.map((item, index,) => (
                    <li id="in-cart" key={index}>
                        {item.name}: ${item.price}
                        <button id="remove" onClick={() => onRemoveItem(index)}> Remove </button>
                    </li>
                ))}
                </ul>

                {itemCount > 0 && (
                    <button id="reset" onClick={onResetCart}> Reset Cart</button>
                )}
        </div>
    );
}