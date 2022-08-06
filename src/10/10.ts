export type UserType = {
    name: string
    hair: number
    adress: {city:string, house?: number}
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



export const cutHair = (u: UserType , cutLength: number) => {
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
        adress : {
            ...u.adress, 
            city: city
        }
    }

    return userCopy
}

export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
    const userCopy = { 
        ...u,
        adress : {
            ...u.adress, 
            house: house
        }
    }
    return userCopy
}

export const upgradeUserLaptop = (u: UserWithLaptopType, title: string) => {
    const userCopy = { 
        ...u,
        laptop : {
            ...u.laptop, 
            title: title
        }
    }
    return userCopy
}