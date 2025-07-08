import { Card, Container, TitleSection, ProductTitle, ProductData, ProductDataSection} from "./ProductDetails.styles";
import Button from "../Button/Button";

export default function ProductDetails({name, quantity, measureUnit, category, onEdit}) {
 
    return (

<>
<Container>
    <Card>
        <TitleSection>
            <ProductTitle>{name}</ProductTitle>
        </TitleSection>
        <ProductDataSection>
             <ProductData>{`Quantity: ${quantity} ${measureUnit}`}</ProductData>
            <ProductData>{`Category: ${category}`}</ProductData>
        </ProductDataSection>
        <Button $primary onClick={onEdit}>edit</Button>

    </Card>
</Container>
</>    
 )
}