import { createElement } from "./helper.js";

const nav = document.querySelector('.nav');
// const burger = createBurgerMenu(nav);

export const renderNavigation = () => {
  nav.textContent = '';

  const buttonSignUp = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Зарегистрироваться'
  });

  // buttonSignUp.addEventLister('click', () => {
  //   console.log('registration');
  // });

  const buttonLogin = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Войти'
  });

  // buttonLogin.addEventLister('click', () => {
  //   console.log('enter the matrix');
  // });

  nav.append(buttonSignUp, buttonLogin);
}; 