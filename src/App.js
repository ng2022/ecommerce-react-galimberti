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
    initial={6}
    stock={15}
    />
    <ItemListContainer 
    name='Galileo Galilei'
    description='Prova prova prova.'
    img={userImage}
    initial={3}
    stock={0}
    />
    <ItemListContainer 
    name='Critobal Colon'
    description='Prova prova prova.'
    img={userImage}
    initial={1}
    stock={10}
    />
    </div>
    </>

  );
}

export default App;
