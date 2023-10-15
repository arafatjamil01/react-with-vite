import ListGroup from './components/ListGroup';

function App() {
  const items = ['Jashore','Chuwadanga', 'Dhaka', 'Kushtia', 'Chittagong', 'Khulna'];
  
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={items} heading='Districts' onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;