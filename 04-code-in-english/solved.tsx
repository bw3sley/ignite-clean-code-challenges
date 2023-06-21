// Código em inglês 

import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const products: Product[] = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ProductList() {
  const [productsThatMatchWithTitle, setProductsThatMatchWithTitle] = useState<Product[]>([])

  function searchProductByTitle(productTitle: string) {
    const productThatMatchWithTitle = products.filter(product => product.title.includes(productTitle))

    setProductsThatMatchWithTitle(productThatMatchWithTitle)
  }

  return (
    <div>
      <input type="text" onChange={(event) => searchProductByTitle(event.target.value)} />

      {productsThatMatchWithTitle.map(product => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

