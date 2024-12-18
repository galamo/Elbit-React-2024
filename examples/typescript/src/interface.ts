interface ProductFromLib {
  title: string;
  price: number;
  id: number;
  category: string; // change it in a while.
}
// interface SuperMarketProduct extends ProductFromLib {
//   expirationDate: Date;
// }

interface ProductFromLib {
  expirationDate: Date;
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
