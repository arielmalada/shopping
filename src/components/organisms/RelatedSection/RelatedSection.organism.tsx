import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import { ProductsByCategoryContext } from "../../../contexts/ProductsByCategoryProvider";

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
//#endregion

//#region MAIN COMPONENT
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

export default RelatedSection