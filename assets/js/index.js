const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector(".modal");
const closeModal = document.querySelector('.modal-close');
const modalContainer = document.querySelector('.modal-container');

function showbuyTickets() {
    modal.classList.toggle('open-modal');
}

function removebuyTickets () {
    modal.classList.remove('open-modal');
}

for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showbuyTickets)
};

closeModal.addEventListener('click',removebuyTickets);

modal.addEventListener('click',removebuyTickets);

modalContainer.addEventListener('click',(index)=> {
    index.stopPropagation();
});