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

    async function getData(){
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        console.log(data)

        return data.results
    }

    useEffect(() => {
        async function pegarDados(){
            const result = await getData()
            setPersons(result)
        }
        pegarDados()
    }, [])

    return (
        <div>
            <h1>Personagens do Rick e Morty</h1>
            {persons.map((person) => (
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