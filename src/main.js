import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import err from './img/err.png';
import httpRequest from './js/pixabay-api.js';
import createMarkup from './js/render-functions.js';

const key = '45158363-d126d9ec5bd50365e414d8df4';
const form = document.querySelector('.form');
const list = document.querySelector('.list');
const button = document.querySelector('.loadMoreBtn');
const loader = document.querySelector('.loader');
const perPage = 15;

let pageNumber = 1;
let text = '';

form.addEventListener('submit', searchHandler);
button.addEventListener('click', addGallery);

function searchHandler(evt) {
  button.style.display = 'none';
  list.innerHTML = '';
  text = evt.target.elements.input.value.trim();
  evt.preventDefault();
  if (text !== 0) {
    loader.style.display = 'block';
    pageNumber = 1;
    getGalleryItems();
  }
}
function addGallery() {
  loader.style.display = 'block';
  pageNumber += 1;
  getGalleryItems();
}
function getGalleryItems() {
  httpRequest(key, text, pageNumber, perPage)
    .then(response => {
      const photos = response.hits;
      if (photos.length !== 0) {
        list.insertAdjacentHTML('beforeend', createMarkup(photos));
        if (response.totalHits > perPage * pageNumber) {
          button.style.display = 'block';
        } else {       
          iziToast.show({
            class: 'toast',
            position: 'topRight',
            messageColor: 'white',
            message: `We're sorry, but you've reached the end of search results.`,
          });
        }
        const lightbox = new SimpleLightbox('.list a', {
          captions: true,
          captionType: 'attr',
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
        });
        lightbox.refresh();
      } else {
        loader.style.display = 'none';
        iziToast.show({
          class: 'toast',
          position: 'topRight',
          icon: 'icon',
          iconUrl: err,
          iconColor: 'white',
          messageColor: 'white',
          message: `Sorry, there are no images matching your search query. Please try again!`,
        });
      }
    })
    .catch(error => {
      iziToast.show({
        class: 'toast',
        position: 'topRight',
        icon: 'icon',
        iconUrl: err,
        iconColor: 'white',
        messageColor: 'white',
        title: 'Error',
        titleColor: 'white',
        message: `Please try again!`,
      });
      if (error.response) {
        console.error('Server error:', error.response.status);
        loader.style.display = 'none';
      } else if (error.request) {
        console.error('No response from server');
      } else {
        console.error('Unknown error:', error.message);
      }
    })
    loader.style.display = 'none';
  form.reset();
}
function scrollToNewImages() {
  const galleryItems = document.querySelectorAll('.gallery a');
  if (galleryItems.length > 0) {
    const { height: cardHeight } = galleryItems[0].getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}
    
