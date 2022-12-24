//#region IMPORTS

import React, { useState } from "react";
import CheckoutSection from "../../components/molecules/CheckoutSection";
import DataSection from "../../components/molecules/DataSection";
import PictureSection from "../../components/molecules/PictureSection";
import RelatedSection from "../../components/organisms/RelatedSection";
import { ProductProvider } from "../../contexts/ProductProvider";
import { ProductsByCategoryProvider } from "../../contexts/ProductsByCategoryProvider";
import { ProductTypes } from "../../services/products";
//#endregion

//#region MAIN COMPONENT
const DetailPage: React.FC = () => {
  const [cartData, setCartData] = useState<ProductTypes[]>([]);
  const handleClickAddtoCart = (data: ProductTypes) => {
    setCartData([...cartData, data]);
  };
  return (
    <ProductProvider>
      <ProductsByCategoryProvider>
        <div className="mx-4 my-10 lg:mx-auto lg:max-w-5xl">
          <section className="flex flex-col items-center justify-center mb-20 space-y-4 lg:space-x-10 lg:flex-row">
            <PictureSection />
            <DataSection />
            <CheckoutSection onClick={handleClickAddtoCart} />
          </section>
          <RelatedSection />
        </div>
      </ProductsByCategoryProvider>
    </ProductProvider>
  );
};
//#endregion

export default DetailPage;
