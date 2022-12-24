//#region IMPORTS

import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
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
  );
};

const CheckoutSection: React.FC = () => {
  const productValue = useContext(ProductContext);
  const isPriceReduced = (productValue?.discountPercentage || 0) > 0;
  const finalPrice =
    isPriceReduced && productValue
      ? productValue.price -
        Math.round(productValue.price * productValue.discountPercentage * 0.01)
      : productValue?.price;
  return (
    <Card>
      <CardBody className="space-y-2">
        <Typography variant="h4">$ {finalPrice}</Typography>
        <Button>Add to Cart</Button>
      </CardBody>
    </Card>
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
          <CheckoutSection />
        </section>
        <section>related</section>
      </div>
    </ProductProvider>
  );
};
//#endregion

export default DetailPage;
