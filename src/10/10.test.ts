import { cutHair, UserType, UserWithLaptopType, moveUser, upgradeUserLaptop, UserWithBooksType, moveUserToOtherHouse, addNewBooks, updateBook, deleteBook, UserWithCompaniesType, addCompany } from './10';



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

test('change house num', () => {
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

test('add new book', () => {
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

    const userCopy= addNewBooks(user , 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.adress).toBe(userCopy.adress)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[3]).toBe('ts')
    expect(user.books.length).toBe(3)
})

test('update js to ts', () => {
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

    const userCopy= updateBook(user , 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.adress).toBe(userCopy.adress)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})


test('delete js book', () => {
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
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy= deleteBook(user , 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.adress).toBe(userCopy.adress)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test('add new company', () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: 'Ivan',
        hair: 70,
        adress: { 
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        companies: [{id: 1, title: "Epam"},
                    {id: 2, title: "Leverx"}]
    }

    const userCopy= addCompany(user, 'Google')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.adress).toBe(userCopy.adress)
    expect(userCopy.companies).not.toBe(user.companies)
    expect(userCopy.companies[2].title).toBe('Google')
    expect(userCopy.companies.length).toBe(3)
})