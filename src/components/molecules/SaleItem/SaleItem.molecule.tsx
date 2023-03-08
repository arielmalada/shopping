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
  image: string;
  title: string;
};
//#endregion

//#region MAIN COMPONENTS
const SaleItem: React.FC<SaleItemTypes> = ({ id, image, title }) => {
  if(!image) return null
  return (
    <Card
      shadow={false}
      className="relative grid h-[40vw] min-w-[40vw] items-end justify-center overflow-hidden text-center"
    >
      <Link to={`/detail/${id}`}>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 rounded-none"
        >
          <div className="absolute top-0 right-0 space-x-2 text-white bg-red-700">
            <span>-</span>
            <span>50</span>
            <span>%</span>
          </div>
          <img src={image} alt={title} className="object-cover h-full" />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative p-0 px-2 ">
          <Typography
            variant="h6"
            color="white"
            className="mb-6 font-medium leading-[1.5] text-ellipsis"
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
