import { useContext } from 'react'

import ProductCard from '../../components/product-card/prodcut-card.components'

import { ProductContext } from '../../contexts/products.context'

import './shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductContext)

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop
