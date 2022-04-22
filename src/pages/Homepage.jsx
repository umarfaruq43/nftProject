import AboutHome from "../components/Dashboard/AboutHome";
import Hero from "../components/Hero";
import ProductsLanding from "../components/Products/ProductsLanding";
import Services from "../components/Services/Services";
import Navbar from "../components/Navbar/Navbar";
import Faq from "../components/faq/Faq";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutHome />
      <ProductsLanding />
      <Faq />
    </div>
  );
}

export default Homepage;
