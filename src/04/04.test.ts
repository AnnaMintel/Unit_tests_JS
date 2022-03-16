import { CourseType } from "./04";


test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
} )

test("should take cheep courses then 160", () => {
    const courses = [
        {title: "Css", price: 110},
        {title: "html", price: 210},
        {title: "react", price: 150},
    ]

    const chipCourses = courses.filter(course => course.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("Css");
    expect(chipCourses[1].title).toBe("react");
} )


test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'MIlk', isDone: true},
        {id: 3, title: 'Soap', isDone: false},
        {id: 4, title: 'Meat', isDone: true}
    ]

    const completedTasks = tasks.filter(task => task.isDone === true)
    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);
})