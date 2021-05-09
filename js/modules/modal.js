function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modaLTimerId);
}

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal() {
    //Modal

    const modalTriger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');
    //    modalCloseBtn = document.querySelector('[data-close]');
    modalTriger.forEach(item => {
        item.addEventListener('click', openModal);
    });

    

    //modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target == modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modaLTimerId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    function showThanksModal(message) {
        const prevModalDilog = document.querySelector('.modal__dialog');
        prevModalDilog.classList.add('hide');

        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
    <div class="modal__content">
    <div data-close="" class="modal__close">×</div>
    <div class="modal__title">${message}</div>
    </div>
    `;

        document.querySelector('.modal').append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModalDilog.classList.add('show');
            prevModalDilog.classList.remove('hide');
            closeModal();
        }, 4000);


    }

}
export default modal;
export {closeModal, openModal};