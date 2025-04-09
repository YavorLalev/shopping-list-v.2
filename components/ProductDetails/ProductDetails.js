import { Card, Container, TitleSection, ProductTitle, ProductData, ProductDataSection} from "./ProductDetails.styles";


export default function ProductDetails({name, quantity, measureUnit, category}) {
 
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

    </Card>
</Container>
</>    
 )
}