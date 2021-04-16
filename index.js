
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/api/v1/looks')
  .then(response => response.json())
  .then(looks => {
    console.log(looks);
  })
})
