import React, { useContext } from "react";
import { ProductsByCategoryContext } from "../../../contexts/ProductsByCategoryProvider";
import ProductItem from "../../molecules/ProductItem";


//#region MAIN COMPONENT
const NewProducts: React.FC = () => {
  const products = useContext(ProductsByCategoryContext);
  if (products?.products)
    return (
      <div>
        <div className="flex justify-between px-2">
          <div>New Items</div>
          <div>View All</div>
        </div>
        <section className="flex px-2 pt-10 pb-4 space-x-2 overflow-x-auto">
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
  return null
};
//#endregion

export default NewProducts