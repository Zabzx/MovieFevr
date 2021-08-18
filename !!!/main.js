//Main screen
const searchBtn = document.querySelector('.search-btn');
let movieImage = document.querySelector('#movie-image');
let movieTitle = document.querySelector('.movie-title');
let movieDescription = document.querySelector('.movie-desc');
let movieYear = document.getElementById('year');
let movieActors = document.getElementById('actors');
let movieRating = document.getElementById('rating');
//Modal screen
const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title h1');
const modalGenre = document.querySelector('.genre');
const modalType = document.querySelector('.type');
const modalRated = document.querySelector('.rated');
const modalRuntime = document.querySelector('.runtime');
const overlay = document.querySelector('.overlay');
const modalCloseButton = document.getElementById('close-btn');
const test = document.querySelector('.test').addEventListener('click', openModal);

searchBtn.addEventListener('click', fetchData);
overlay.addEventListener('click', removeModal);
modalCloseButton.addEventListener('click', removeModal);


function openModal(){
    modal.classList.add('active');
    overlay.classList.add('overlay-active');
    //Put fetch data into the modal
    
}

function removeModal(){
    modal.classList.remove('active');
    overlay.classList.remove('overlay-active');
}

function fetchData(){
    const userInputValue = document.querySelector('.user-input').value;

    fetch(`http://www.omdbapi.com/?t=${userInputValue}&apikey=9fabedf7`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
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
        console.log(movieRating)
    })
}
