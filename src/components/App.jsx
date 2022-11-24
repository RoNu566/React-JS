import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
const App = () => {
  
  return (
  <>
    <Navbar/>
    <ItemListContainer greeting={"Bienvenidos al primer sitio de moda circular"}/>
  </>
  );
}

export default App;
