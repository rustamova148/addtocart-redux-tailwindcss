import { products } from "../product"
import ProductCard from "../components/ProductCard"
const Home = () => {
  return (
    <div>
      <h1 className="text-3xl my-5">List Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
           {products.map((product, key)=>
              <ProductCard key={key} data={product} />
           )}
      </div>
    </div>
  )
}

export default Home