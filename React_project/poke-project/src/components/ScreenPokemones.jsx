
const ScreenPokemones = ({pokemones, position}) => {
    console.log(position);
    return (
        <div className="poke-screen">
            {pokemones.map((pokemon, idx)=> (
                <div 
                key={pokemon.id} 
                className="poke-box" 
                style={{backgroundColor : idx == position ? 'red' : 'transparent'}}>
                    <img src={pokemon.sprites.front_default}/>
                    {pokemon.name}
                </div>
            ))}
        </div>
    )
}

export default ScreenPokemones