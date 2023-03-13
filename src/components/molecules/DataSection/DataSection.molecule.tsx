//#region IMPORTS
import { Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";

//#endregion



//#region MAIN COMPONENTS
const DataSection: React.FC = () => {
  const productValue = useContext(ProductContext);
  const isPriceReduced = (productValue?.discountPercentage || 0) > 0;
  const finalPrice =
    isPriceReduced && productValue
      ? productValue.price -
        Math.round(productValue.price * productValue.discountPercentage * 0.01)
      : productValue?.price;
  return (
    <div className="col-span-12 space-y-3 lg:col-span-8">
      <Typography variant="h2">{productValue?.title}</Typography>
      <div>
        <div className="flex space-x-2">
          {isPriceReduced && (
            <div className="text-xs text-red-700 ">
              <div>Deal</div>
              <div className="text-sm">{productValue?.discountPercentage} %</div>
            </div>
          )}
          <div>$ {finalPrice}</div>
        </div>
        {isPriceReduced && (
          <div className="flex space-x-1 text-xs">
            <span>was</span>
            <span className="line-through">$ {productValue?.price}</span>
          </div>
        )}
      </div>
      <div>{productValue?.description}</div>
    </div>
  );
};
//#endregion

export default DataSection;