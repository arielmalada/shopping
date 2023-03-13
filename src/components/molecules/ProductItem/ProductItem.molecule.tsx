//#region IMPORTS
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
//#endregion

//#region TYPES
type ProductItemTypes = {
  id: string;
  image: string;
  title: string;
  price: number;
};
//#endregion

//#region MAIN COMPONENTS
const ProductItem: React.FC<ProductItemTypes> = ({
  id,
  image,
  title,
  price,
}) => {
  return (
    <Card className="min-h-[40vw] min-w-[40vw] md:min-w-0 md:col-span-3 md:min-h-0 px-auto">
      <Link to={`/detail/${id}`}>
        <CardHeader className="relative h-20 lg:h-56" floated={false}>
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full aspect-video"
          />
        </CardHeader>
        <CardBody className="mb-6 text-center">
          <Typography variant="h4" className="line-clamp-2 max-h-16">
            {title}
          </Typography>
        </CardBody>
        <CardFooter className="absolute left-0 right-0 w-12 px-0 py-2 mx-auto text-center bottom-2">
          <Typography variant="h6" className="space-x-1">
            <span>$</span>
            <span>{price}</span>
          </Typography>
        </CardFooter>
      </Link>
    </Card>
  );
};
//#endregion

export default ProductItem;
