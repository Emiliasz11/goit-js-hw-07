import simpleLightbox from '.node_modules/simplelightbox';
import { galleryItems } from './gallery-items.js';
// Change code below this line
galleryItems.forEach((item)=> {
    const galletyItem=`
          <a class="gallery__item" href=${item.original}">
          <img class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"/></img></a>`;
          gallery.insertAdjacentHTML("beforeend", galletyItem);

     gallery.onclick= (event)=>{
        event.preventDefault();
        if (event.target.nodeName !=="IMG"){
            return;
        }
        const instance = basicLightbox.create(
             `
            <img width="1400" height="900" src="${event.target.dataset.source}">
             `
            );
        instance.show();
        gallery.addEventListener("keydown", (event)=>{
            if (event.key === "Escape"){
                instance.close();
            }
        })
        };
    
    });

console.log(galleryItems);
let gallery = new simpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function()
{
    gallery.captions= "true";
    gallery.captionSelector= "img";
    gallery.captionType="attr";
    gallery.captionsDate="alt";
    gallery.captionPosition="bottom";
    gallery.captionDelay= 0;

});
const lightbox = new simpleLightbox(".gallery a",
{
    caption: true,
    captionsDate:"alt",
    captionDelay:250,
});





  
