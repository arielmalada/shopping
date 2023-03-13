//#region IMPORTS
import React, { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
//#endregion



//#region MAIN COMPONENTS
const PictureSection: React.FC = () => {
  const productValue = useContext(ProductContext);
  return (
    <img
      src={productValue?.thumbnail}
      alt={productValue?.title || "empty image"}
      className="object-cover w-[100vw] md:w-72 md:rounded-xl aspect-square rounded-b-xl"
    />
  );
};
//#endregion

export default PictureSection;