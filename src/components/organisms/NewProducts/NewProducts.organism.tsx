import { Typography, Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import { ProductsNewProductsContext } from "../../../contexts/ProductsNewProductsProvider";
import ProductItem from "../../molecules/ProductItem";

//#region MAIN COMPONENT
const NewProducts: React.FC = () => {
  const products = useContext(ProductsNewProductsContext);
  if (products?.products)
    return (
      <div>
        <div className="flex items-center justify-between px-2">
          <Typography variant="h5" className="px-2 md:px-6">New Products</Typography>
          <Button variant="text" className="px-2 text-secondary md:px-6">View All</Button>
        </div>
        <section className="flex px-2 pb-4 space-x-2 overflow-x-auto">
          {products.products.map((item) => (
            <ProductItem
              image={item.thumbnail}
              title={item.title}
              price={item.price}
              id={item.id}
            />
          ))}
        </section>
      </div>
    );
  return null;
};
//#endregion

export default NewProducts;
