import { useState } from 'react';

import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [isAlertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Button color="danger" onClick={()=>setAlertVisibility(true)}>
        Click me to get alert
      </Button>

      {isAlertVisible && <Alert onClose={()=>setAlertVisibility(false)}>Alert text</Alert>}
    </div>
  );
}

export default App;

/*
 * List groups using React
 */
// import ListGroup from './components/ListGroup';

// function App() {
//   const items = ['Jashore','Chuwadanga', 'Dhaka', 'Kushtia', 'Chittagong', 'Khulna'];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }

//   return (
//     <div>
//       <ListGroup items={items} heading='Districts' onSelectItem={handleSelectItem} />
//     </div>
//   );
// }

// export default App;
