import React from 'react';

const CategoryFilter = ({ brands, selectedBrand, filterByBrand }) => {
  return (
    <div className="category-filter">
    <h4>Category</h4>
      <a href="#" className='filter-category'>Electronic</a>
      <a href="#" className='filter-category'>Camera</a>
      <a href="#" className='filter-category'>Headphone</a>
      <a href="#" className='filter-category'>Gaming</a>      
    </div>
  );
};

export default CategoryFilter;
