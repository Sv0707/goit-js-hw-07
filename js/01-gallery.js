import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems и предоставленному 
// шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься 
// с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map((item) => 
`<div class="gallery__item">
<a class="gallery__link" href=${item.original}>
  <img
    class="gallery__image"
    src=${item.preview}
    data-source=${item.original}
    alt="${item.description}"
  />
</a>
</div>`).join("");

gallery.insertAdjacentHTML("beforeend", markup);

let instance;

const openModal = (e => {
    e.preventDefault();
  
    if (e.target.tagName != "IMG") {
        return;
    }

instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">
`, { onClose : (instance)  =>  {window.removeEventListener("keydown", closeModal)}
   } 
   );

instance.show();

const closeModal = (e => {
  if (e.code === "Escape") {
        instance.close();
        window.removeEventListener("keydown", closeModal);
        }
 }
);

window.addEventListener("keydown", closeModal);

});

gallery.addEventListener('click', openModal);



