import { useState } from 'react';

//conventional name, Props, is also written with the component name on it
// ListGroupProps

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1); // State hook

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && (
          <li className="list-group-item">No items found</li>
        )}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
