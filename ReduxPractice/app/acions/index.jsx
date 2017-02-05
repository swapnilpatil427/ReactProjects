export var changeName = (name) => {
    return {
        type : 'CHANGE_NAME',
        name : name
    }
}

export var addHobby = (hobby) => {
    return {
        type : 'ADD_HOBBY',
        hobby : hobby
    }
}

export var removeHobby = (id) => {
    return {
        type : 'REMOVE_HOBBY',
        id : id
    }
}