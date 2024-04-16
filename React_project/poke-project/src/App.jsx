import { useEffect, useState } from 'react';
import './App.css'
import ScreenPokemones from './components/ScreenPokemones';
import BattleScreen from './components/BattleScreen';

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [position, setPosition] = useState(0);

  const [myPokeSelect, setMyPokeSelect] = useState([]);
  const [compRandSelect, setCompRandSelect] = useState([]);

  const [startGame, setStartGame] = useState(false);

  const [myHealth, setMyHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);

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
    //console.log(pokemonWithImages);
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
    //console.log(mySelection);
    setMyHealth(mySelection[0].stats[0].base_stat)
    //console.log("My health " + myHealth);
    computerSelection();
  }

  const computerSelection = () =>{
    const computerPos = Math.floor(Math.random() * 20);
    const computerSelect = pokemones.filter((value, idx) => computerPos == idx);
    setCompRandSelect(computerSelect);
    setEnemyHealth(computerSelect[0].stats[0].base_stat)
    //console.log("Enemy health " + enemyHealth);
    //console.log(computerSelect);
  }

  const handleStart = () => {
    setStartGame(true);
  }

  const handleAttack = () => {
    const myAtackDmg = Math.floor(Math.random() * 30);
    const enemyAtackDmg = Math.floor(Math.random() * 30);


    setEnemyHealth(enemyHealth-myAtackDmg);
    setMyHealth(myHealth-enemyAtackDmg);
    
  }

  useEffect(() => {
    pokemonData(pokeUrl);
  }, [])

  return (
    <>
    <div className="main-container">
    <h1>Poke Battles</h1>

    <div className='layout-game'>
      <div className='screen-container'>
        <div className='screen-layout'>
          <div className='screen-display'>
          {
            startGame ? (
              <BattleScreen myPokeSelect={myPokeSelect}
              compRandSelect ={compRandSelect}
              myHealth = {myHealth}
              enemyHealth = {enemyHealth}/>
            ) : (
              <ScreenPokemones pokemones={pokemones} position={position}/>
            )
            
          }
            
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
            <button className='button-start' onClick={() => handleStart()}></button>
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
              <button className='button-a' onClick={() => handleAttack()}></button>
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
