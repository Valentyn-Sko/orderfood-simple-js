function cards() {
    class MenuCard {
        constructor(src, alt, title, descr, price, parrentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 27;
            this.classes = classes;
            this.parent = document.querySelector(parrentSelector);
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            this.classes.forEach(className => element.classList.add(className));

            element.innerHTML = `
            <div class="menu__item">
                    <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    /*getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, desct, price}) => {
                new MenuCard(img, altimg, title, desct, price, '.menu .container', 'menu_item').render();
            });
        });*/

    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({
                img,
                altimg,
                title,
                desct,
                price
            }) => {
                new MenuCard(img, altimg, title, desct, price, '.menu .container', 'menu_item').render();
            });
        });

}
export default cards;