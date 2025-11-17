const initialCards =[
  {name:"Val Thorens", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},
  {name:"Restaurant terrace", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},
  {name:"An outdoor cafe", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},
  {name:"A very long bridge, over the forest and through the trees", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
  {name:"Tunnel with morning light", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},
  {name:"Mountain house", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"}
];

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector("#profile-name-input");
const descriptionInput = document.querySelector("#profile-description-input");
const editProfileButton = document.querySelector(".profile__edit");
const editProfileModal = document.querySelector("#profile-edit-modal");
const editCloseButton = editProfileModal.querySelector(".modal__close-btn");

editProfileButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});

editCloseButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});

const editProfileForm = editProfileModal.querySelector(".modal__form");

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value.trim();
  profileDescription.textContent = descriptionInput.value.trim();
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

const newPostBtn = document.querySelector(".add-card-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const postImageInput = document.querySelector("#profile-name-input"); // The image link input in new post modal
const postCaptionInput = document.querySelector("#profile-description-input"); // The caption input in new post modal

function openModal(modal) {
  modal.classList.add('modal__is-opened');
}

function closeModal(modal) {
  modal.classList.remove('modal__is-opened');
}

newPostBtn.addEventListener('click', () => openModal(newPostModal));
newPostCloseBtn.addEventListener('click', () => closeModal(newPostModal));

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  const imageUrl = postImageInput.value.trim();
  const caption = postCaptionInput.value.trim();

  console.log("New post image URL:", imageUrl);
  console.log("New post caption:", caption);

  closeModal(newPostModal);
  newPostForm.reset();
}

newPostForm.addEventListener("submit", handleNewPostSubmit);