// CategoryList.jsx
import React from 'react';

const Category = ({ categories }) => {
  return (
    <div className="category-list-container">
        <div className="category-item">
            <a href={`/`}>All</a>
        </div>
      <div className="category-items">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <a href={`/category/${category}`}>{category}</a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;