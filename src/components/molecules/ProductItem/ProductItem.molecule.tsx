//#region IMPORTS
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
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
const ProductItem: React.FC<ProductItemTypes> = ({ id, image, title, price }) => {
  return (
    <Card className="min-h-[40vw] min-w-[40vw] md:min-w-0 md:col-span-3 md:min-h-0 ">
      <Link to={`/detail/${id}`}>
        <CardHeader color="blue" className="relative h-20 lg:h-56">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
          <div>{price}</div>
        </CardBody>
      </Link>
    </Card>
  );
};
//#endregion

export default ProductItem;
