import { addSkill } from './03';
import { StudentType } from '../02/02';

let student: StudentType;
    beforeEach (() => {
        student = {
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

    })

test ("new tech skill should be added",() => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, "c+");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("c+");
})