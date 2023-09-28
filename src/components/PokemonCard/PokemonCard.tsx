import { useMemo } from 'react'
import { Pokemon } from '../../data/types/pokemon'
import styles from './PokemonCard.module.scss'

interface Props {
    pokemon: Pokemon
}

export default function PokemonCard({ pokemon }: Props) {
    const pokemonId = useMemo(() => {
        return pokemon.id.toString().padStart(3, '0')
    }, [pokemon.id])
    const imageUrl = useMemo(() => {
        return `/images/${pokemonId}.png`
    }, [pokemonId])
    const title = useMemo(() => `#${pokemonId} ${pokemon.name.english}`, [pokemonId, pokemon.name.english])
    return (
        <div className={styles.pokemonCard}>
            {pokemon.id && <img src={new URL(imageUrl, import.meta.url).href} alt={pokemon.name.english} className={styles.pokemonImage}/>}
            <span className={styles.pokemonTitle}>
                {title}
            </span>
            <ul>
                {
                    pokemon.type.map((type) => (
                        <li key={type} className={styles[type.toLowerCase()]}>{type}</li>
                    ))
                }
            </ul>
        </div>
    )
}
