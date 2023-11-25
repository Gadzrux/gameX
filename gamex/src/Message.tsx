function Message() {
  // this component will return Hellow World wherever it is rendered
  const name = "Krishnava";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message;
