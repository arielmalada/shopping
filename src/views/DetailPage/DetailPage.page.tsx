//#region IMPORTS

import React from "react";
import CheckoutSection from "../../components/molecules/CheckoutSection";
import DataSection from "../../components/molecules/DataSection";
import PictureSection from "../../components/molecules/PictureSection";
import RelatedSection from "../../components/organisms/RelatedSection";
import { ProductProvider } from "../../contexts/ProductProvider";
import { ProductsByCategoryProvider } from "../../contexts/ProductsByCategoryProvider";
//#endregion

//#region MAIN COMPONENT
const DetailPage: React.FC = () => {
  return (
    <ProductProvider>
      <ProductsByCategoryProvider>
        <div className="mx-4 my-10 lg:mx-auto lg:max-w-5xl">
          <section className="flex flex-col items-center justify-center mb-20 space-y-4 lg:space-x-10 lg:flex-row">
            <PictureSection />
            <DataSection />
            <CheckoutSection />
          </section>
          <RelatedSection />
        </div>
      </ProductsByCategoryProvider>
    </ProductProvider>
  );
};
//#endregion

export default DetailPage;
