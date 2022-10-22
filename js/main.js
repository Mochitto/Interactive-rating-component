const ratingCard = document.querySelector(".rating-card")
const thankYouCard = document.querySelector(".thank-you-card")
const thankYouRating = document.getElementById("rating-selection")

const ratingForm = document.querySelector("#rating-form")
const formButton = document.querySelector("button.ball")

formButton.addEventListener("click", (event) => {
    event.preventDefault()

    let rating = ratingForm.querySelector(".rating-bar").querySelector("input:checked").value
    thankYouRating.innerText = `You selected ${rating} out of 5`

    ratingCard.classList.toggle("is-hidden")
    thankYouCard.classList.toggle("is-hidden")
})