import Header from "../../Partials/Header/Header";
import Banner from "../../Partials/Banner";
import Discount from "../../Partials/Discount";
import Featured from "../../Partials/Featured";
import ProductList from "../../Partials/ProductList";
import BestSeller from "../../Partials/BestSeller";

import product1 from "../../../Assets/images/product/product_1.png";
import product2 from "../../../Assets/images/product/product_2.png";
import product3 from "../../../Assets/images/product/product_3.png";
import product4 from "../../../Assets/images/product/product_4.png";
import product5 from "../../../Assets/images/product/product_5.png";
import product6 from "../../../Assets/images/product/product_6.png";
import product7 from "../../../Assets/images/product/product_7.png";
import product8 from "../../../Assets/images/product/product_8.png";
import Subscribe from "../../Partials/Subscribe";
import Footer from "../../Partials/Footer/Footer";

const Home = () => {
  const products = [
    {
      image: product1,
      name: "Quartz Belt Watch",
      price: "$150.00",
      link: "#",
    },
    {
      image: product2,
      name: "Luxury Leather Wallet",
      price: "$80.00",
      link: "#",
    },
    {
      image: product3,
      name: "Luxury Leather Wallet",
      price: "$80.00",
      link: "#",
    },
    {
      image: product4,
      name: "Luxury Leather Wallet",
      price: "$80.00",
      link: "#",
    },
    {
      image: product5,
      name: "Luxury Leather Wallet",
      price: "$80.00",
      link: "#",
    },
    {
      image: product6,
      name: "Luxury Leather Wallet",
      price: "$80.00",
      link: "#",
    },
    {
      image: product7,
      name: "Luxury Leather Wallet",
      price: "$80.00",
      link: "#",
    },
    {
      image: product8,
      name: "Luxury Leather Wallet",
      price: "$80.00",
      link: "#",
    },
    // Add more products as needed
  ];
  return (
    <>
      <Header />
      <Banner />
      <Featured />
      <main>
        <ProductList title="Awesome" products={products} />
        <Discount />
        <BestSeller title="Best Sellers" products={products} />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Home;
