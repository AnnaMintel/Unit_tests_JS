export type UserType = {
    name: string
    hair: number
    adress: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithCompaniesType = {
    companies: Array<{ title: string, id: number }>
}

export type CompanyType = { title: string, id: number }



export const cutHair = (u: UserType, cutLength: number) => {
    // никогда ничего не меняем в данных, которые приходят. Обязательно создаем копию и с ней работаем
    // а затем уже в конце можем переприсвоить новое значение старому. ОДнако функция должна сохраниться чистой
    const userCopy = {
        ...u,
        hair: u.hair / cutLength
    }
    // userCopy.hair = u.hair / cutLength

    return userCopy
}

export const moveUser = (u: UserWithLaptopType, city: string) => {
    const userCopy = {
        ...u,
        adress: {
            ...u.adress,
            city: city
        }
    }

    return userCopy
}

export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
    const userCopy = {
        ...u,
        adress: {
            ...u.adress,
            house: house
        }
    }
    return userCopy
}

export const upgradeUserLaptop = (u: UserWithLaptopType, title: string) => {
    const userCopy = {
        ...u,
        laptop: {
            ...u.laptop,
            title: title
        }
    }
    return userCopy
}

export const addNewBooks = (u: UserWithLaptopType & UserWithBooksType, newbooks: string) => {
    const userCopy = {
        ...u,
        books: [...u.books, newbooks]
    }
    return userCopy
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType,
    oldBook: string,
    newBook: string) => {
    const userCopy = {
        ...u,
        books: u.books.map((book) => (book === oldBook ? newBook : book))
    }

    return userCopy
}

export const deleteBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) => {
    const userCopy = {
        ...u,
        books: u.books.filter(b => b !== bookForDelete)
    }

    return userCopy
}

export const addCompany = (u: UserWithLaptopType & UserWithCompaniesType, newCompany: string) => {
    const userCopy = {
        ...u,
        companies: [...u.companies, { id: 3, title: newCompany }]
    }
    return userCopy
}

export const updateCompanyTitle = (companies: { [key: string]: Array<CompanyType> },
                                                userName: string,
                                                idCompany: number,
                                                newTitle: string) => {

    let companyCopy = { ...companies }
    companyCopy[userName] = companyCopy[userName].map(c => c.id === idCompany ?
        { ...c, title: newTitle } : c)

    return companyCopy
}