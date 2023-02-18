import { render } from "./render.js"
import { getUserByName } from "./requests.js"

export function searchUser() {
    const input = document.querySelector('.search__input')
    const button = document.querySelector('.search__button')

    button.addEventListener('click', async (event) => {
        event.preventDefault()
        const users = await getUserByName(input.value)
        
        await render(users)
    })
}