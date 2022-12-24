//#region IMPORTS
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
//#endregion

//#region TYPES
type CheckoutSectionTypes = {
  onClick?(): void;
 
};
//#endregion
//#region MAIN COMPONENTS
const CheckoutSection: React.FC<CheckoutSectionTypes> = ({onClick}) => {
  const productValue = useContext(ProductContext);
  const isPriceReduced = (productValue?.discountPercentage || 0) > 0;
  const finalPrice =
    isPriceReduced && productValue
      ? productValue.price -
        Math.round(productValue.price * productValue.discountPercentage * 0.01)
      : productValue?.price;
  return (
    <Card className="w-full text-center lg:w-56">
      <CardBody className="space-y-2">
        <Typography variant="h4">$ {finalPrice}</Typography>
        <Button onClick={onClick} fullWidth data-testid="test_addtocart">Add to Cart</Button>
      </CardBody>
    </Card>
  );
};
//#endregion

export default CheckoutSection;