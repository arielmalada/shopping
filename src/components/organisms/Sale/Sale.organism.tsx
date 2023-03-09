import React, { useContext, useRef } from "react";
import { ProductsByCategoryContext } from "../../../contexts/ProductsByCategoryProvider";
import SaleItem from "../../molecules/SaleItem/SaleItem.molecule";

//#region MAIN COMPONENT
const Sale: React.FC = () => {
  const sale = useContext(ProductsByCategoryContext);
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  if (sale?.products)
    return (
      <div>
        <div className="flex justify-between px-2">
          <div>Sale</div>
          <div>View All</div>
        </div>
        <section className="flex px-2 py-4 space-x-2 overflow-x-auto md:overflow-hidden md:grid md:grid-cols-12 md:gap-1"  ref={ref}>
          {sale.products.map((item) => (
            <SaleItem id={item.id} image={item.thumbnail} title={item.title} price={item.price} />
          ))}
        </section>
      </div>
    );
  return null;
};
//#endregion

export default Sale;
