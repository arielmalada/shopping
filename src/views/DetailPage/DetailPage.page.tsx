//#region IMPORTS

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useContext } from "react";
import {
  ProductContext,
  ProductProvider,
} from "../../contexts/ProductProvider";
import {
  ProductsByCategoryContext,
  ProductsByCategoryProvider,
} from "../../contexts/ProductsByCategoryProvider";
//#endregion

//#region TYPES
type RelatedProductItemTypes = {
  image: string;
  title: string;
  price: number;
};
//#endregion

//#region SECONDARY COMPONENT
const PicturesSection: React.FC = () => {
  const productValue = useContext(ProductContext);
  return (
    <img
      src={productValue?.thumbnail}
      alt={productValue?.title || "empty image"}
      className="object-cover w-64 h-64 rounded"
    />
  );
};

const DataSection: React.FC = () => {
  const productValue = useContext(ProductContext);
  const isPriceReduced = (productValue?.discountPercentage || 0) > 0;
  const finalPrice =
    isPriceReduced && productValue
      ? productValue.price -
        Math.round(productValue.price * productValue.discountPercentage * 0.01)
      : productValue?.price;
  return (
    <div className="space-y-3">
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

const CheckoutSection: React.FC = () => {
  const productValue = useContext(ProductContext);
  const isPriceReduced = (productValue?.discountPercentage || 0) > 0;
  const finalPrice =
    isPriceReduced && productValue
      ? productValue.price -
        Math.round(productValue.price * productValue.discountPercentage * 0.01)
      : productValue?.price;
  return (
    <Card className="w-full text-center lg:w-56">
      <CardBody className="space-y-2">
        <Typography variant="h4">$ {finalPrice}</Typography>
        <Button fullWidth>Add to Cart</Button>
      </CardBody>
    </Card>
  );
};

const RelatedProductItem: React.FC<RelatedProductItemTypes> = ({
  image,
  title,
  price,
}) => {
  return (
    <Card className=" w-96">
      <CardHeader color="blue" className="relative h-20 lg:h-56">
        <img src={image} alt={title} className="w-full h-full" />
      </CardHeader>
      <CardBody className="text-center">
      <Typography variant="h5" className="mb-2">
          {title}
        </Typography>
        <div>
          {price}
        </div>
      </CardBody>
    </Card>
  );
};

const RelatedSection: React.FC = () => {
  const relatedProducts = useContext(ProductsByCategoryContext);
  if (relatedProducts?.products)
    return (
      <section className="flex px-2 pt-10 pb-4 space-x-2 overflow-x-auto">
        {relatedProducts.products.map((item) => (
          <RelatedProductItem
            image={item.thumbnail}
            title={item.title}
            price={item.price}
          />
        ))}
      </section>
    );
  return null
};
//#endregion

//#region MAIN COMPONENT
const DetailPage: React.FC = () => {
  return (
    <ProductProvider>
      <ProductsByCategoryProvider>
        <div className="mx-4 my-10 lg:mx-auto lg:max-w-5xl">
          <section className="flex flex-col items-center justify-center mb-20 space-y-4 lg:space-x-10 lg:flex-row">
            <PicturesSection />
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
