import React from "react";
import { Link } from "react-router-dom";

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          

          <div className="search-box bg-pink-100 flex">
            <i className="fa fa-search "></i>
            <input className="bg-purple-50 text-black"  type="text" placeholder="Search and hit enter..." />
            <span> All Categories</span>
          </div>

          <div className="icon flex width ">
            <i className="fa fa-user icon-circle  "></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
