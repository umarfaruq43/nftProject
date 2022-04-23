
import AboutHome from '../components/Dashboard/AboutHome'
import Hero from '../components/Hero'
import ProductsLanding from '../components/Products/ProductsLanding'
import Services from '../components/Services/Services'



function Homepage() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutHome />
      <ProductsLanding />
    </div>
  )
}

export default Homepage