export default function ProductList({products}) {

return (
    <>
    <div>
      <ul>
        {products.map((piece) => (
          <li key={piece.id}>
            {piece.name}
          </li>
        ))}
      </ul>
    </div>
  </>
);
}