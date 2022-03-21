import React, { MouseEvent} from "react";

// const callback = () => {
//     alert('hey')
// } 
// window.setTimeout (callback, 1000);

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert('user deleted');
    }
    const saveUser = () => {
        alert('user saved');
    }
    const onNameChanged = () => {
        console.log("name changed")
    }
    const onBlur = () => {
        console.log("focuse lost")
    }

    return <div><textarea
        onChange={onNameChanged}
        onBlur={onBlur}
    >Dimych</textarea>

        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>

        <button tabIndex={1} onClick={deleteUser}>delete</button>
        <button tabIndex={2} onClick={saveUser}>save</button>
    </div>
}



