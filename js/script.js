import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import slider from './modules/slider';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    tabs();
    modal();
    timer();
    slider();
    cards();
    calc();
    forms();
});