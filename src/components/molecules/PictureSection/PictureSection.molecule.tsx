//#region IMPORTS
import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
//#endregion



//#region MAIN COMPONENTS
const PictureSection: React.FC = () => {
  const productValue = useContext(ProductContext);
  return (
    <img
      src={productValue?.thumbnail}
      alt={productValue?.title || "empty image"}
      className="object-cover w-64 h-64 rounded"
    />
  );
};
//#endregion

export default PictureSection;