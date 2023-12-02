import React from 'react';

const BrandFilter = ({ brands, selectedBrand, filterByBrand }) => {
  return (
    <div className="brand-filter">
    <h4>Brand</h4>
      <a href="" className='filter-brand'>
        <img src="https://cdn.tgdd.vn/Brand/2/Logitech482-b_47.jpg" width="30" alt="SamSung" />
      </a>
      <a href="" className='filter-brand'>
        <img src="https://cdn.tgdd.vn/Brand/2/Sony1942-b_57.png" width="30" alt="Sony" />
      </a>
      <a href="" className='filter-brand'>
        <img src="https://cdn.tgdd.vn/Brand/2/logo-iphone-220x48.png" width="30" alt="Sony" />
      </a>
      <a href="" className='filter-brand'>
        <img src="https://cdn.tgdd.vn/Brand/2/Microsoft482-b_26.jpg" width="30" alt="Sony" />
      </a>
    </div>
  );
};

export default BrandFilter;
