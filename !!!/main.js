//Main screen selectors
const searchBtn = document.querySelector('.search-btn');
const movieCard = document.querySelector('#movie-card');
const errorMessage = document.querySelector('.error-message');
let movieImage = document.querySelector('#movie-image');
let movieTitle = document.querySelector('.movie-title');
let movieDescription = document.querySelector('.movie-desc');
let movieYear = document.getElementById('year');
let movieActors = document.getElementById('actors');
let movieRating = document.getElementById('rating');

//Modal screen selectors
const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title h1');
const modalGenre = document.querySelector('.genre');
const modalType = document.querySelector('.type');
const modalRated = document.querySelector('.rated');
const modalRuntime = document.querySelector('.runtime');
const overlay = document.querySelector('.overlay');
const modalCloseButton = document.getElementById('close-btn');
const readMore = document.querySelector('.read-more');








//Events
searchBtn.addEventListener('click', fetchData);
readMore.addEventListener('click',openModal)
overlay.addEventListener('click', removeModal);
modalCloseButton.addEventListener('click', removeModal);
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        fetchData();
    }
})








//Functions
function openModal(){
    modal.classList.add('active');
    overlay.classList.add('overlay-active');
    
}

function removeModal(){
    modal.classList.remove('active');
    overlay.classList.remove('overlay-active');
}

function fetchData(){

    readMore.style.display = 'block';

    const userInputValue = document.querySelector('.user-input').value;

    if (userInputValue === ''){
        errorMessage.textContent = 'Please enter a value';
        readMore.style.display = 'none';
        return
        
    } else {
        errorMessage.textContent = '';
    }

    fetch(`https://www.omdbapi.com/?t=${userInputValue}&apikey=9fabedf7`)
    .then(res => res.json())
    .then(data => {

        if (data.Error === 'Movie not found!'){
            //Handling errors
            errorMessage.textContent = 'There was an error. Please check your entry and try again.';

            movieYear.style.display = 'none'
            movieActors.style.display = 'none'
            movieRating.style.display = 'none'
            readMore.style.display = 'none';
        } else {
            movieYear.style.display = 'block'
            movieActors.style.display = 'block'
            movieRating.style.display = 'block'
            readMore.style.display = 'block'
        }
        
        //Display Data to the main screen
        movieImage.src = data.Poster;
        movieTitle.textContent = data.Title;
        movieDescription.textContent = data.Plot;
        movieYear.textContent = `Year: ${data.Year}`;
        movieActors.textContent = `Actors: ${data.Actors}`;
        movieRating.textContent = `Rating: ${data.imdbRating}`;

        //Put fetch data into the modal
        modalImage.src = data.Poster;
        modalTitle.textContent = data.Title;
        modalGenre.textContent = `Genre: ${data.Genre}`;
        modalType.textContent = `Type: ${data.Type}`;
        modalRated.textContent = `Rated: ${data.Rated}`;
        modalRuntime.textContent = `Runtime: ${data.Runtime}`;
    })
}
