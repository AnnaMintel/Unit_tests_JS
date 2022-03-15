const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100]; // > 90

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "Css", price: 110},
    {title: "html", price: 210},
    {title: "react", price: 150},
]

// < 160
const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}

const chipCourses = [
    {title: "Css", price: 110},
    {title: "React", price: 150}
];