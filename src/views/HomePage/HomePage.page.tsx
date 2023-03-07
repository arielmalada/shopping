//#region IMPORTS

import {
  Avatar,
  Button,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import Sale from "../../components/organisms/Sale";
import NewProducts from "../../components/organisms/NewProducts";
import { ProductsByCategoryProvider } from "../../contexts/ProductsByCategoryProvider";

//#endregion

//#region MAIN COMPONENT
const HomePage: React.FC = () => {
  return (
    <ProductsByCategoryProvider>
      <section className="flex items-center justify-between px-4 py-2 mb-4">
        <div>
          <div className="space-x-2">
            <span>Welcome</span>
            <span>Back!</span>
          </div>
          <div className="space-x-2 font-bold">
            <span>Ariel</span>
            <span>Malada</span>
          </div>
        </div>
        <div className="flex items-center justify-center w-10">
          <Avatar
            size="sm"
            variant="circular"
            src="https://source.unsplash.com/random/300x300/?person"
          />
        </div>
      </section>
      <section className="flex px-2 py-4 space-x-2 overflow-x-auto">
        <Card>
          <CardBody className="flex justify-between py-4 w-[80vw]">
            <div className="relative">
              <Typography variant="h6">Trade-in and save</Typography>
              <Typography variant="small">
                Enjoy Great unfront saving
              </Typography>
              <Button size="sm" className="absolute bottom-0">
                Learn More
              </Button>
            </div>
            <div className="p">
              <img
                className="w-32 rounded"
                src="https://source.unsplash.com/random/300x300/?fruit"
                alt="fruit"
              />
            </div>
          </CardBody>
        </Card>
      </section>
      <Sale />
      <NewProducts />
    </ProductsByCategoryProvider>
  );
};
//#endregion

export default HomePage;
