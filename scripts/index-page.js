// const images = [
//   {
//     url: "./assets/images/Photo-gallery-1.jpg",
//   },
//   {
//     url: "./assets/images/Photo-gallery-2.jpg",
//   },
//   {
//     url: "./assets/images/Photo-gallery-3.jpg",
//   },
//   {
//     url: "./assets/images/Photo-gallery-4.jpg",
//   },
//   {
//     url: "./assets/images/Photo-gallery-5.jpg",
//   },
//   {
//     url: "./assets/images/Photo-gallery-6.jpg",
//   },
//   {
//     url: "./assets/images/Photo-gallery-6.jpg",
//   },
//   {
//     url: "./assets/images/Photo-gallery-6.jpg",
//   },
//   {
//     url: "./assets/images/Photo-gallery-6.jpg",
//   },

//   {
//     url: "./assets/images/Photo-gallery-6.jpg",
//   },
//   {
//     url: "./assets/images/Photo-gallery-6.jpg",
//   },
// ];

const key =
  "live_kT9IUM097S8mkNWl8OxZ4onGT2LTWhVh78WXjCTZE5mRBR5Fu1LCjw9i1zDlDThR";

const pet = axios.get(
  "https://api.thecatapi.com/v1/images/search?limit=100&api_key=" + key
);
pet.then((result) => {
  console.log(result.data);
  showGallery(result.data);
});

const showGallery = (pets) => {
  pets.forEach((image) => {
    // create
    createImageContainer(image.url);
  });
};

const createImageContainer = (imgUrl) => {
  /**
	 * 
	 * <div class="photo-gallery__item">
						<img
							src="./assets/images/Photo-gallery-1.jpg"
							alt="concert goers with smoke and lasers"
							class="photo-gallery__image"
						/>
					</div>
	 * 
	 */
  let parentEl = document.querySelector(".photo-gallery");

  let photoGalleryItem = document.createElement("div");
  photoGalleryItem.classList.add("photo-gallery__item");

  let img = document.createElement("img");
  img.classList.add("photo-gallery__image");
  img.src = imgUrl;
  photoGalleryItem.appendChild(img);
  parentEl.appendChild(photoGalleryItem);
};

// Onload show gallery
// showGallery();
