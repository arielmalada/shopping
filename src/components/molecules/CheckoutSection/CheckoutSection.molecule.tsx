//#region IMPORTS
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import React, { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
import { ProductTypes } from "../../../services/products";
//#endregion

//#region TYPES
type CheckoutSectionTypes = {
  onClick?(data: ProductTypes): void;
};
//#endregion

//#region MAIN COMPONENTS
const CheckoutSection: React.FC<CheckoutSectionTypes> = ({ onClick }) => {
  const productValue = useContext(ProductContext);
  const isPriceReduced = (productValue?.discountPercentage || 0) > 0;
  const finalPrice =
    isPriceReduced && productValue
      ? productValue.price -
        Math.round(productValue.price * productValue.discountPercentage * 0.01)
      : productValue?.price;
  const handleClickAddtoCart = () => {
    if (productValue && onClick) onClick(productValue);
  };
  return (
    <Card className="w-full col-span-12 m-0 text-center lg:col-span-4">
      <CardBody className="space-y-2">
        <Typography variant="h4" className="space-x-1">
          <span>$</span>
          <span>{finalPrice}</span>
        </Typography>
        <div className="grid grid-cols-12">
          <div className="flex items-center justify-center col-span-4 md:col-span-12">
            <IconButton variant="text">
              <FontAwesomeIcon icon={faMinus} />
            </IconButton>
            <div>2</div>
            <IconButton variant="text">
              <FontAwesomeIcon icon={faPlus} />
            </IconButton>
          </div>
          <div className="col-span-8 md:col-span-12">
            <Button
              fullWidth
              onClick={handleClickAddtoCart}
              className="bg-secondary"
              data-testid="test_addtocart"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
//#endregion

export default CheckoutSection;
