import AboutHome from "../components/Dashboard/AboutHome";
import Hero from "../components/Hero";
import ProductsLanding from "../components/Products/ProductsLanding";
import Faq from "../components/faq/Faq";

function Homepage() {
  return (
    <div>
      <Hero />
      {/* <Services /> */}
      <AboutHome />
      <ProductsLanding />

      <Faq />
    </div>
  );
}

export default Homepage;
