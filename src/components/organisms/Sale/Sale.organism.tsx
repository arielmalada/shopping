import React, { useContext } from "react";
import { ProductsByCategoryContext } from "../../../contexts/ProductsByCategoryProvider";
import SaleItem from "../../molecules/SaleItem/SaleItem.molecule";

//#region MAIN COMPONENT
const Sale: React.FC = () => {
  const sale = useContext(ProductsByCategoryContext);
  if (sale?.products)
    return (
      <div>
        <div className="flex justify-between px-2">
          <div>Sale</div>
          <div>View All</div>
        </div>
        <section className="flex px-2 py-4 space-x-2 overflow-x-auto">
          {sale.products.map((item) => (
            <SaleItem id={item.id} image={item.thumbnail} title={item.title} />
          ))}
        </section>
      </div>
    );
  return null;
};
//#endregion

export default Sale;
