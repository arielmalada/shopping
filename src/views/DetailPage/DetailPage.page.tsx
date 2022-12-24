//#region IMPORTS

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useContext } from "react";
import CheckoutSection from "../../components/molecules/CheckoutSection";
import DataSection from "../../components/molecules/DataSection";
import PictureSection from "../../components/molecules/PictureSection";
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
