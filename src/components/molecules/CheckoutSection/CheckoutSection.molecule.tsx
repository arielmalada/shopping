//#region IMPORTS
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
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
    <Card className="w-full text-center lg:w-56">
      <CardBody className="space-y-2">
        <Typography variant="h4">$ {finalPrice}</Typography>
        <Button
          onClick={handleClickAddtoCart}
          fullWidth
          data-testid="test_addtocart"
        >
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  );
};
//#endregion

export default CheckoutSection;
