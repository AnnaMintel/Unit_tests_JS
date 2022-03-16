import { createGreetingMessage, ManType } from "./05"

let people: Array<ManType> = []

beforeEach ( () => {
    people = [
        {name: "Andrew", age: 33},
        {name: "Pavel", age: 24},
        {name: "Leonid", age: 18}
    ]
})

test ("should get array of greetind messages", () => {

const messages = createGreetingMessage(people)

expect(messages.length).toBe(3);
expect(messages[0]).toBe('Hello Andrew. Welcom to the Incubator');
expect(messages[1]).toBe('Hello Pavel. Welcom to the Incubator');
expect(messages[2]).toBe('Hello Leonid. Welcom to the Incubator');

})