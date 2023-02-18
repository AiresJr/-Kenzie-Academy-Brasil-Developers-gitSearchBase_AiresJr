export async function getUserByName(userName){
    
    const usersName = await fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        "Content-Type": 'application/json'
    }
    })
    .then(response => response.json())
    .then(res =>{
        localStorage.setItem('searchUsers', JSON.stringify(res))
       
        if(res.message){
            window.location.replace('/src/pages/error.html')
        } else{
            window.location.replace('/src/pages/profile.html')
        }
    })
    
    return userName
}

export async function getRepository(url){
    
    const repoList = await fetch(url, {
    method: 'GET',
    headers: {
        "Content-Type": 'application/json'
    }
    })
    .then(response => response.json())

    return repoList
}