//#region IMPORTS
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
import { Link } from "react-router-dom";
//#endregion

//#region TYPES
type ProductItemTypes = {
  image: string;
  title: string;
  price: number;
};
//#endregion

//#region MAIN COMPONENTS
const ProductItem: React.FC<ProductItemTypes> = ({ image, title, price }) => {
  return (
    <Link to="/detail">
      <Card className=" w-96">
        <CardHeader color="blue" className="relative h-20 lg:h-56">
          <img src={image} alt={title} className="w-full h-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
          <div>{price}</div>
        </CardBody>
      </Card>
    </Link>
  );
};
//#endregion

export default ProductItem;
