import { Button, Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import { ProductsSaleContext } from "../../../contexts/ProductsSaleProvider";
import SaleItem from "../../molecules/SaleItem/SaleItem.molecule";

//#region MAIN COMPONENT
const Sale: React.FC = () => {
  const sale = useContext(ProductsSaleContext);

  if (sale?.products)
    return (
      <div>
        <div className="flex items-center justify-between px-2">
          <Typography variant="h5" className="px-2 md:px-6">
            Sale
          </Typography>
          <Button variant="text" className="px-2 text-secondary md:px-6">
            View All
          </Button>
        </div>
        <section className="flex px-2 py-4 space-x-2 overflow-x-auto md:overflow-hidden md:grid md:grid-cols-12 md:gap-1">
          {sale.products.map((item) => (
            <SaleItem
              discount={item.discountPercentage}
              id={item.id}
              image={item.thumbnail}
              title={item.title}
              price={item.price}
            />
          ))}
        </section>
      </div>
    );
  return null;
};
//#endregion

export default Sale;
