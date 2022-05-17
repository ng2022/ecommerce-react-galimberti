// STYLES
import './App.css';

//ASSETS
import userImage from './assets/images/user-img.png';

//COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <div className='UserSection'>
    <ItemListContainer 
    name='Marco Polo'
    description='Prova prova prova.'
    img={userImage}
    />
    <ItemListContainer 
    name='Galileo Galilei'
    description='Prova prova prova.'
    img={userImage}
    />
    <ItemListContainer 
    name='Critobal Colon'
    description='Prova prova prova.'
    img={userImage}
    />
    </div>

    </>
  );
}

export default App;
