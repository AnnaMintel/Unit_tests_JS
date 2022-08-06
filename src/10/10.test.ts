import { UserType } from './10';

const cutHair = (u: UserType , cutLength: number) => {
    // никогда ничего не меняем в данных, которые приходят. Обязательно создаем копию и с ней работаем
    // а затем уже в конце можем переприсвоить новое значение старому. ОДнако функция должна сохраниться чистой
    const userCopy = { 
        ...u,
        hair: u.hair / cutLength
    }
    // userCopy.hair = u.hair / cutLength

    return userCopy
}

test('check type test', () => {
    let user: UserType = {
        name: 'Ivan',
        hair: 70,
        adress: { 
            title: 'Kazan'
        }
    }

    const cutUser = cutHair(user , 2)

    user.adress.title = 'Kiev'

    expect(user.hair).toBe(70)
    expect(cutUser.hair).toBe(35)
    expect(cutUser.adress).toBe(user.adress)
})