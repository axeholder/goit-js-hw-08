
// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGallery() {
    return galleryItems.map(({ preview, original, description }) => (`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`)).join('');
};

const marcup = createGallery()

gallery.insertAdjacentHTML('beforeend', marcup)

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });


// старый код

// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Описан в документации
// import SimpleLightbox from 'simplelightbox';
// // Дополнительный импорт стилей
// import 'simplelightbox/dist/simple-lightbox.min.css'
// // Change code below this line

// // console.log(galleryItems);



// const instance = basicLightbox.create(`
//     <div class="modal">
//          <img src="">
//     </div>`
// );

// const imageContainer = document.querySelector('.gallery');
// const modal = instance.element().querySelector('img');

// const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
//      `
//     <div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>
// `).join('');

// imageContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// function onOpenModal(evt) {
//     evt.preventDefault()
//     if (evt.currentTarget === evt.target) {
//         return;
//     };

//     modal.src = evt.target.dataset.source;
//     document.addEventListener('keydown', onEscKeyPress);

//     instance.show();
// };

// function onEscKeyPress(evt) {
//     if (evt.code === 'Escape') {
//     document.removeEventListener('keydown', onEscKeyPress);
//     instance.close()
//     };
// };

// window.addEventListener('click', onEscKeyPress);
// imageContainer.addEventListener('click', onOpenModal);
