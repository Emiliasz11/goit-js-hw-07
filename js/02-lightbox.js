import simpleLightbox from '.node_modules/simplelightbox';
import { galleryItems } from './gallery-items.js';
// Change code below this line


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





  
