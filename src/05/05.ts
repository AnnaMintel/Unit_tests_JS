export type ManType = {
    name: string
    age: number
}

const people = [
    {name: "Andrew", age: 33},
    {name: "Pavel", age: 24},
    {name: "Leonid", age: 18}
]

const dimychTransformator = (man: ManType) => {
   return{
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0]
   }
}

const devs = [
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Andrew"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Pavel"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Leonid"
    },
]

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const dev3 = people.map(dimychTransformator)

const dev4 = people.map( man => {
    return{
     stack: ["css", "html", "js", "tdd", "react"],
     firstName: man.name.split(" ")[0]
    }
})

const messages = people.map( man => (`Hello ${man.name.split(" ")[0]}. Welcom to the Incubator`));
console.log(messages)

export const createGreetingMessage = (people: Array<ManType>) => {
   return people.map( man => (`Hello ${man.name.split(" ")[0]}. Welcom to the Incubator`))
}
