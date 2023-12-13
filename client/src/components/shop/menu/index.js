import React, { Fragment, createContext, useReducer } from 'react';
import Layout from '../layout';
import ProductCategory from './ProductCategory';
import { homeState, homeReducer } from './HomeContext';
import SingleProduct from './SingleProduct';
import Slider from './Slider';
export const HomeContext = createContext();

const MenuComponent = () => {
  return (
    <Fragment>
      {/* <Slider /> */}
      {/* Category, Search & Filter Section */}
      <p className="text-center text-sm p-8 text-[#C07936]">MENU'S</p>
      <h1 className="text-center text-2xl p-5">Our Awesome Menu's</h1>
      <section className="m-4 md:mx-8 md:my-6">
        <ProductCategory />
      </section>
      {/* Product Section */}
      <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SingleProduct />
      </section>
    </Fragment>
  );
};

const Menu = props => {
  const [data, dispatch] = useReducer(homeReducer, homeState);

  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<MenuComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Menu;
