import Message from "./Message";
import ButtonComponenet from "./components/ButtonComponent";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Where do you wanna go?"
        onSelectItem={handleSelectItem}
      />
      <br></br>
      <ButtonComponenet
        color="danger"
        onClick={() => console.log("Button has been clicked!")}
      >
        Submit Here
      </ButtonComponenet>
    </div>
  );
}

export default App;
