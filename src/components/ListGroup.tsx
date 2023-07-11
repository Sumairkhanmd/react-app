function ListGroup() {
  const items = ["NY", "SA", "paris", "tokyo", "london"];

  return (
    <>
      <h1>Hello</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
