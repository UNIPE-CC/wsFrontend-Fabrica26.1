"use client"

import { useEffect, useState } from "react"

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
        <div>
            <h1>Personagens do Rick e Morty</h1>
            <input type="text" 
                placeholder="Pesquisar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {filterPersons.map((person) => (
                <div key={person.id}>
                    <p>{person.name}</p>
                    <p>{person.status}</p>
                    <p>{person.species}</p>
                    <img src={person.image} alt={person.name} />
                </div>
            ))}
        </div>
    )
}