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