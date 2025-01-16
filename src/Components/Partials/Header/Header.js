import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import logo from "../../../Assets/images/logo.png";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    fetch("/wp-json/blocktheme18/v1/theme-logo")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLogoUrl(data.logo_url);
      })
      .catch((error) => {
        console.error("Error fetching logo:", error);
      });
  }, []);

  const handleClose = () => {
    setSearchOpen(!searchOpen);
  };
  return (
    <header class="main_menu home_menu">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg navbar-light">
              <a class="navbar-brand" href="index.html">
                {/* <img src={logo} alt="logo" /> */}
                <img src={logoUrl} alt="Site Logo" className="site-logo" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="menu_icon">
                  <i class="fas fa-bars"></i>
                </span>
              </button>

              <div
                class="collapse navbar-collapse main-menu-item"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_1"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown_1"
                    >
                      <a class="dropdown-item" href="category.html">
                        {" "}
                        shop category
                      </a>
                      <a class="dropdown-item" href="single-product.html">
                        product details
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      pages
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown_2"
                    >
                      <a class="dropdown-item" href="login.html">
                        {" "}
                        login
                      </a>
                      <a class="dropdown-item" href="tracking.html">
                        tracking
                      </a>
                      <a class="dropdown-item" href="checkout.html">
                        product checkout
                      </a>
                      <a class="dropdown-item" href="cart.html">
                        shopping cart
                      </a>
                      <a class="dropdown-item" href="confirmation.html">
                        confirmation
                      </a>
                      <a class="dropdown-item" href="elements.html">
                        elements
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      blog
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown_2"
                    >
                      <a class="dropdown-item" href="blog.html">
                        {" "}
                        blog
                      </a>
                      <a class="dropdown-item" href="single-blog.html">
                        Single blog
                      </a>
                    </div>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div class="hearer_icon d-flex">
                <a id="search_1" onClick={handleClose}>
                  <CiSearch />
                </a>
                <a href="">
                  <CiHeart />
                </a>
                <div class="hearer_icon d-flex">
                  <a id="search_1" href="javascript:void(0)">
                    <i class="ti-search"></i>
                  </a>
                  <a href="">
                    <i class="ti-heart"></i>
                  </a>
                  <div class="dropdown cart">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      id="navbarDropdown3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span>
                        <FaCartPlus />
                      </span>
                    </a>
                    {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div class="single_product">
    
                                    </div>
                                </div> */}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {searchOpen && (
        <div class="search_input" id="search_input_box">
          <div class="container ">
            <form class="d-flex justify-content-between search-inner">
              <input
                type="text"
                class="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button onClick={handleClose} type="submit" class="btn">
                <IoIosClose />
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
