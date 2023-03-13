import React, { useContext } from "react";
import { ProductsByCategoryContext } from "../../../contexts/ProductsByCategoryProvider";
import ProductItem from "../../molecules/ProductItem";

//#region MAIN COMPONENT
const RelatedSection: React.FC = () => {
  const relatedProducts = useContext(ProductsByCategoryContext);
  if (relatedProducts?.products)
    return (
      <section className="flex px-2 pt-10 pb-4 space-x-2 overflow-x-auto">
        {relatedProducts.products.map((item) => (
          <ProductItem
            id={item.id}
            image={item.thumbnail}
            title={item.title}
            price={item.price}
          />
        ))}
      </section>
    );
  return null;
};
//#endregion

export default RelatedSection;
