//#region IMPORTS

import { Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import {
  ProductContext,
  ProductProvider,
} from "../../contexts/ProductProvider";
//#endregion

//#region SECONDARY COMPONENT
const Pictures: React.FC = () => {
  const productValue = useContext(ProductContext);
  return (
    <img
      src={productValue?.thumbnail}
      alt={productValue?.title || "empty image"}
    />
  );
};

const Data: React.FC = () => {
  const productValue = useContext(ProductContext);
  const isPriceReduced = (productValue?.discountPercentage || 0) > 0;
  const finalPrice =
    isPriceReduced && productValue
      ? productValue.price -
        Math.round(productValue.price * productValue.discountPercentage * 0.01)
      : productValue?.price;
  return (
    <div>
      <Typography variant="h2">{productValue?.title}</Typography>
      <div className="flex space-x-2">
        {isPriceReduced && (
          <div className="text-red-700">
            <Typography variant="small">Deal</Typography>
            <Typography>{productValue?.discountPercentage} %</Typography>
          </div>
        )}
        <div>
          <Typography>{finalPrice}</Typography>
          {isPriceReduced && <Typography variant="small">was {productValue?.price}</Typography>}
        </div>
      </div>
    </div>
  );
};
//#endregion

//#region MAIN COMPONENT
const DetailPage: React.FC = () => {
  return (
    <ProductProvider>
      <div>
        <section className="flex items-center justify-center space-x-10 xl:max-w-5xl">
          <Pictures />
          <Data />
          <section>price and button</section>
        </section>
        <section>related</section>
      </div>
    </ProductProvider>
  );
};
//#endregion

export default DetailPage;
