import { Card, Container, TitleSection, ProductTitle, ProductData, ProductDataSection} from "./ProductDetails.styles";


export default function ProductDetails({products, id}) {
 
    const product = products.find(product => product.id === id);

    const {name, category, quantity, measureUnit} = product;
 console.log(product);
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