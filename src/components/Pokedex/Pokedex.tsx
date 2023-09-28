import { useSelector, useDispatch } from 'react-redux'
import PokemonCard from '../PokemonCard/PokemonCard'
import { filter } from '../../store/slices/pokedexSlice';
import { RootState } from '../../store/store';
import { Fragment } from 'react';
import styles from './Pokedex.module.scss'

export default function Pokedex() {
  const pokedex = useSelector((state: RootState) => state.pokedex.list)
return (
    <div className={styles.pokedex}>
        {
            pokedex.map((pokemon, index) => (
                <Fragment key={pokemon.id}>
                    <PokemonCard pokemon={pokemon}/>
                </Fragment>
            ))
        }
    </div>
)
}