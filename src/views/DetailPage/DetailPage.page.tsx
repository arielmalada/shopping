//#region IMPORTS

import React, { useContext } from "react";
import { ProductContext, ProductProvider } from "../../contexts/ProductProvider";
//#endregion

//#region SECONDARY COMPONENT
const Pictures: React.FC = () => {
  const productValue = useContext(ProductContext);
  return(
    <img src={productValue?.thumbnail} alt={productValue?.title || "empty image"}/>
  )
}
//#endregion

//#region MAIN COMPONENT
const DetailPage: React.FC = () => {
  return (
    <ProductProvider>
      <div>
        <section className="flex items-center justify-center space-x-10 xl:max-w-5xl">
          <Pictures/>
          <section>data</section>
          <section>price and button</section>
      
        </section>
        <section>related</section>
      </div>
    </ProductProvider>
  );
};
//#endregion

export default DetailPage;
