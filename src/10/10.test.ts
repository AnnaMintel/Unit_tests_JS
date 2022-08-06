import { cutHair, UserType, UserWithLaptopType, moveUser, upgradeUserLaptop, UserWithBooksType, moveUserToOtherHouse } from './10';



test('check type test', () => {
    let user: UserType = {
        name: 'Ivan',
        hair: 70,
        adress: { 
            city: 'Kazan'

        }
    }

    const cutUser = cutHair(user , 2)

    user.adress.city = 'Kiev' 

    expect(user.hair).toBe(70)
    expect(cutUser.hair).toBe(35)
    expect(cutUser.adress).toBe(user.adress)
})

test('change adress', () => {
    let user: UserWithLaptopType = {
        name: 'Ivan',
        hair: 70,
        adress: { 
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        }
    }

    const movedUser = moveUser(user , 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.adress).not.toBe(movedUser.adress)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.adress.city).toBe('Kiev')
})

test('upgrade laptop to mac', () => {
    let user: UserWithLaptopType = {
        name: 'Ivan',
        hair: 70,
        adress: { 
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        }
    }

    const userWithNewLaptop = upgradeUserLaptop(user , 'Macbook')

    expect(user).not.toBe(userWithNewLaptop)
    expect(user.laptop).not.toBe(userWithNewLaptop .laptop)
    expect(userWithNewLaptop.laptop.title).toBe('Macbook')
})

test('upgrade laptop to mac', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        hair: 70,
        adress: { 
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js']
    }

    const userWithNewLaptop = moveUserToOtherHouse(user , 99)

    expect(user).not.toBe(userWithNewLaptop)
    expect(user.books).toBe(userWithNewLaptop.books)
    expect(user.laptop).toBe(userWithNewLaptop .laptop)
    expect(user.adress).not.toBe(userWithNewLaptop.adress)
    expect(userWithNewLaptop.adress.house).toBe(99)
})