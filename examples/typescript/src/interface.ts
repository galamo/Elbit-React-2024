interface Product {
  title: string;
  price: number;
  id: number;
  category: string; // change it in a while.
}

// Type Decleration

function getProduct(): Product {
  return {
    title: "Coffee",
    price: 2,
    id: 1234,
    category: "Drink",
    // expirationDate: new Date().toISOString(),
  };
}

//Extend
