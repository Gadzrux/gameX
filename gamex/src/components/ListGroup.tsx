import { Fragment, useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <Fragment>
      <h1>Lists</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {/* when two values are compared like this the second value is returned from
      and (test in console) */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
