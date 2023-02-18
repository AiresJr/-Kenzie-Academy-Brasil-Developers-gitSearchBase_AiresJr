import { render } from "./render.js"

function  showUser () {
    const users = JSON.parse(localStorage.getItem('searchUsers'))

    render(users)
}
showUser()