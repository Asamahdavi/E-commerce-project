import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "",
      cateName: "Fashion",
    },
    {
      cateImg: "../Assets/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "../Assets/category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "../Assets/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "../Assets/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "../Assets/category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "../Assets/category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "../Assets/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "../Assets/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "../Assets/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "../Assets/category/books.png",
      cateName: "Books",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
