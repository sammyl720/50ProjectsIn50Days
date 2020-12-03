const btn = document.getElementById('jokeBtn')
const joke = document.getElementById('joke')
const url = 'https://icanhazdadjoke.com/'

generateJoke()
btn.addEventListener('click', generateJoke)

// USING ASYNC / AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }
    const res = await fetch(url, config)
    const data = await res.json()
    joke.innerHTML = data.joke
}

// USING .THEN()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json'
//     }
//   }
//     fetch(url, config)
//       .then(res => res.json())
//       .then(data => {
//         joke.innerHTML = data.joke
//       })
// }