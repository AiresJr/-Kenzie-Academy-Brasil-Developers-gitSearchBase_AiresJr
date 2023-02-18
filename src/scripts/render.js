import { getRepository, getUserByName } from "./requests.js";

export async function render(user){
      
    const userList = document.querySelector('.users__container')
    const header = document.querySelector('.header__container')
    
    const cardPerfil = createProfile(user)
    header.innerHTML = ''
    header.appendChild(cardPerfil)
         
    userList.innerHTML = ''
     
    const repoList = await getRepository(user.repos_url)

    repoList.forEach(element =>{
        
        const cardUser = createdCard(element)
        
        userList.appendChild(cardUser)
    })
}

function createProfile (element){
    const userContainer = document.createElement('nav')
    const userInfos = document.createElement('div')
    const userImg = document.createElement('img')
    const userName = document.createElement('h1')
    const divReturn = document.createElement('div')
    const returnLink = document.createElement('a')

    userContainer.classList.add('user__container')
    userInfos.classList.add('user__infos')
    userImg.src = element.avatar_url
    userImg.alt = element.login
    userName.classList.add('user__name')
    userName.innerText = element.login
    divReturn.classList.add('return__container')
    returnLink.innerText = 'Trocar de usuário'
    returnLink.href = '/'

    userContainer.append(userInfos, userImg, userName, divReturn, returnLink)
    divReturn.appendChild(returnLink)
    userInfos.append(userImg, userName)

    
    return userContainer
}

function createdCard(element){
    
    const infosContainer = document.createElement('div')
    const infosUser = document.createElement('div')
    const userProject = document.createElement('h1')
    const projectDescription = document.createElement('p')
    const button = document.createElement('a')
    
    
    infosContainer.classList.add('infos__container')
    infosUser.classList.add('infos__user')
    userProject.classList.add('user__project')
    userProject.innerText = element.name
    projectDescription.classList.add('project__description')
    projectDescription.innerText = element.description
    button.classList.add('repositoy__button')
    button.innerText = 'Repositório'
    button.href = element.html_url
    button.target = '_blank'

    
    infosContainer.append(infosUser, userProject, projectDescription, button)
    infosUser.append(userProject, projectDescription)

    return infosContainer
}
