export type LessonType = {
    title: string
}

type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    adress: {street: {title: string}
    }
}

let props: ManType;
beforeEach(()=> {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{ title: "1" }, { title: "2" }],
        adress: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})


test(" ", () => {
 
    //const age = props.age;
    //const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.adress.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);

})