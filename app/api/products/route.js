export async function GET() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 3 },
    { id: 'p3', name: 'Phone', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p4', name: "Drawers", price: 80, category: 'Furniture', stock: 3},
    { id: 'p5', name: 'Microwave', price: 200, category: 'Kitchen', stock: 2},
    { id: 'p6', name: "Charger", price: 10, category: "Electronics", stock: 10},
    { id: 'p7', name: "Toaster", price: 50, category: "Kitchen", stock: 6},
    { id: 'p8', name: "Bed", price: 1100, category: "Furniture", stock: 4},
  ];
  return Response.json(products);
}