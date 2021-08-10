import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"


export default function index() {
  const [pokemon, setPokemon] = useState


  const pegaPokemon = () => {
    setPokemon(props.pokemon)
  }

  const pokemon = (prevProps) => {
    if (prevProps.pokemon !== props.pokemon) {
      pegaPokemon(props.pokemon);
    }


    pegaPokemon = (pokeName) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => {
          setPokemon(response.data);
        })
        .catch(err => {
          console.log(err);
        });


      return (
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.weight} Kg</p>
          {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
          {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          )}
        </div>
      );

    }
