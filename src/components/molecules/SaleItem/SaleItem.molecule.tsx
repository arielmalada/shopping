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
type SaleItemTypes = {
  id: string;
  price: number;
  image: string;
  title: string;
};
//#endregion

//#region MAIN COMPONENTS
const SaleItem: React.FC<SaleItemTypes> = ({ id, image, price, title }) => {
  if (!image) return null;
  return (
    <Card
      shadow={false}
      className="relative grid min-h-[40vw] min-w-[40vw] md:min-w-0 md:col-span-3 md:min-h-0 items-end justify-center overflow-hidden text-center aspect-square"
    >
      <Link to={`/detail/${id}`}>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 rounded-none"
        >
          <div className="absolute top-0 right-0 px-2 py-1 space-x-1 font-bold bg-teal-200 text-md md:text-lg">
            <span>-</span>
            <span>50</span>
            <span>%</span>
          </div>
          <img src={image} alt={title} className="object-cover h-full" />

          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative p-0 px-2 ">
          <Typography
            variant="h5"
            color="white"
            className="mb-6 font-bold leading-[1.5] text-ellipsis space-x-1"
          >
            <span>$</span>
            <span>{price}</span>
          </Typography>
          <Typography
            variant="h6"
            color="white"
            className="mb-6 font-medium leading-[1.5] max-w-full text-ellipsis"
          >
            {title}
          </Typography>
        </CardBody>
      </Link>
    </Card>
  );
};
//#endregion

export default SaleItem;
