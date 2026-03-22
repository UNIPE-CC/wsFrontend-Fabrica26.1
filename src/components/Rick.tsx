"use client"

import { useEffect, useState } from "react"
import styles from "./rick.module.css"

export default function Rick(){
    type Person = {
        id: number
        name: string
        status: string
        species: string
        image: string
    }

    const [persons, setPersons] = useState<Person[]>([])
    const [search, setSearch] = useState("")

    async function getData(){
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()

        return data.results
    }

    useEffect(() => {
        async function pegarDados(){
            const result = await getData()
            setPersons(result)
        }
        pegarDados()
    }, [])

    const filterPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>Personagens do Rick e Morty</h1>
            
            <input className={styles.search} 
                type="text" 
                placeholder="Pesquisar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className={styles.grid}>
                {filterPersons.map((person) => (
                    <div className={styles.card} key={person.id}>
                        <p>{person.name}</p>
                        <p>{person.status}</p>
                        <p>{person.species}</p>
                        <img className={styles.image} src={person.image} alt={person.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}