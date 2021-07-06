export const BurgerMenu = () => {
    const menuEl = document.querySelector('.burger-menu');

    menuEl.addEventListener('click', () => {
        const navEl = document.querySelector('.header nav');
        navEl.classList.toggle('active-menu');
        menuEl.classList.toggle('active-menu');
    });
}

export const CustomSelect = () => {
    const currentEl = document.querySelector('.admin-nav-current');
    const selectVal = document.querySelector('.select-val');
    const nav = document.querySelector('.admin-nav');
    const items = document.querySelectorAll('.btn-admin');

    currentEl.addEventListener('click', function () {
        nav.classList.toggle('active-select');
    });

    const clearActive = () => {
        items.forEach((item) => {
            item.classList.remove('btn-admin-active');
        });
    }
    const handlerItem = function (e) {
        e.preventDefault();
        clearActive();
        // console.log(this);
        this.classList.add('btn-admin-active');
        selectVal.innerText = this.innerText;
        nav.classList.remove('active-select')
    };

    items.forEach((item) => {
        // item.classList.remove('btn-admin-active');
        item.addEventListener('click', handlerItem);
    });
}

