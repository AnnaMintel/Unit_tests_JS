import React from 'react';

type LocalCityType = {
    title: string
    contryTitle: string
}
type addressType = {
    streetTitle: string
    city: LocalCityType
}
type TechType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isStudent: boolean
    address:  addressType
    technologies: Array<TechType>
}

export const student: StudentType = {
    name: "Hanna",
    id: 1,
    age: 22,
    isStudent: true,
    address: {
        streetTitle: "Moskovskaya",
        city: {
            title: "Minsk",
            contryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "JS"
        }
    ]
}

console.log(student.age);
console.log(student.name);
console.log(student.address.city.title);
console.log(student.technologies[2].title);