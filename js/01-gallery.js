import { galleryItems } from './gallery-items.js';
// Change code below this line
const  gallery= document.querySelector(".gallery");
galleryItems.forEach((item)=> {
    const galletyItem=`
          <a class="gallery__item" href=${item.original}">
          <img class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
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

