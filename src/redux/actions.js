// remove action

export function removePosts(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPosts(post) {
    return {
        type: 'ADD_POST',
        post
    }
}
