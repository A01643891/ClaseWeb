import { useEffect, useState } from 'react';
import './App.css'
import ScreenPokemones from './components/ScreenPokemones';

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [position, setPosition] = useState(0);

  const []= useState(false);

  const [myPokeSelect, setMyPokeSelect] = useState([])

  const pokeUrl = "https://pokeapi.co/api/v2/pokemon";

  const fetchData = async(url) =>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const pokemonData = async (pokeURL) => {
    const response = await fetchData(pokeURL);

    const dataPromise = response.results.map((poke) => (
      fetchData(pokeUrl+'/'+poke.name)
    ));

    const pokemonWithImages = await Promise.all(dataPromise);
    setPokemones(pokemonWithImages);
    console.log(pokemonWithImages);
  }

  const handleSelection = (forward) =>{
    
    if(!forward && position<=0) return;
    if(forward && position>=20) return;
    
    if(forward){
      console.log("Forward");
      setPosition(position + 1);
    }else{
      console.log("Backward");
      setPosition(position - 1);
    }
  }

  const filterSelect = () =>{
    const mySelection = pokemones.filter((value, idx) => position == idx);
    setMyPokeSelect(mySelection);
    console.log(mySelection);

    computerSelection();
  }

  const computerSelection = () =>{
    const computerPos = Math.floor(Math.random() * 20);
    const computerSelect = pokemones.filter((value, idx) => computerPos == idx);
    console.log(computerSelect);
  }

  useEffect(() => {
    pokemonData(pokeUrl);
  }, [])

  return (
    <>
    <div className="main-container">
    <h1>Hola mundo</h1>

    <div className='layout-game'>
      <div className='screen-container'>
        <div className='screen-layout'>
          <div className='screen-display'>
            <ScreenPokemones pokemones={pokemones} position={position}/>
          </div>
        </div>
      </div>
      
      <div className='buttons-container'>
        <div className='container-dpad'>
          <div className='up-container'>
            <button className='up-button'></button>
          </div>
          <div className='sides-container'>
            <button className='left-button' onClick={() => handleSelection(false)}></button>
            <div className='center-button'></div>
            <button className='right-button' onClick={() => handleSelection(true)}></button>
          </div>
          <div className='down-container'>
            <button className='down-button'></button>
          </div>
        </div>

        <div className='container-select'>
          <div className='button-select-container'>
            <button className='button-select' onClick={() => filterSelect()}></button>
            <div>select</div>
          </div>
          <div className='button-start-container'>
            <button className='button-start'></button>
            <div>start</div>
          </div>
        </div>

        <div className='container-action'>
          <div className='button-b-all'>
            <div className='button-b-container'>
              <button className='button-b'></button>
              <div>B</div>
            </div>
          </div>
          
          <div className='button-a-all'>
            <div className='button-a-container'>
              <button className='button-a'></button>
              <div>A</div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default App
