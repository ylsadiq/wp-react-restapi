import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer_part">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-sm-6 col-lg-2">
            <div class="single_footer_part">
              <h4>Top Products</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="">Managed Website</a>
                </li>
                <li>
                  <a href="">Manage Reputation</a>
                </li>
                <li>
                  <a href="">Power Tools</a>
                </li>
                <li>
                  <a href="">Marketing Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-lg-2">
            <div class="single_footer_part">
              <h4>Quick Links</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="">Jobs</a>
                </li>
                <li>
                  <a href="">Brand Assets</a>
                </li>
                <li>
                  <a href="">Investor Relations</a>
                </li>
                <li>
                  <a href="">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-lg-2">
            <div class="single_footer_part">
              <h4>Features</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="">Jobs</a>
                </li>
                <li>
                  <a href="">Brand Assets</a>
                </li>
                <li>
                  <a href="">Investor Relations</a>
                </li>
                <li>
                  <a href="">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-lg-2">
            <div class="single_footer_part">
              <h4>Resources</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="">Guides</a>
                </li>
                <li>
                  <a href="">Research</a>
                </li>
                <li>
                  <a href="">Experts</a>
                </li>
                <li>
                  <a href="">Agencies</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div class="single_footer_part">
              <h4>Newsletter</h4>
              <p>
                Heaven fruitful doesn't over lesser in days. Appear creeping
              </p>
              <div>
                <form
                  target="_blank"
                  class="subscribe_form relative mail_part"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    class="placeholder"
                  />
                  <button
                    type="submit"
                    name="submit"
                    class="email_icon newsletter-submit button-contactForm"
                  >
                    subscribe
                  </button>
                  <div class="mt-10 info"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright_part">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="copyright_text">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i class="ti-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="footer_icon social_icon">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="single_social_icon">
                    <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="single_social_icon">
                    <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="single_social_icon">
                    <FaGlobe />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="single_social_icon">
                    <FaBehance />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
