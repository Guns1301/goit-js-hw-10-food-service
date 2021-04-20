const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

console.log(localStorage);
console.dir(refs.switch);
refs.switch.addEventListener('change', changeColorTheme);
// console.dir(refs.switch);

const replaceTheme = (add, remove) => {
  //функция изменяющая тему
  refs.body.classList.add(add);
  refs.body.classList.remove(remove);
};

function changeColorTheme() {
  const checked = refs.switch.checked;
  if (checked) {
    replaceTheme(Theme.DARK, Theme.LIGHT); // вызов функции изменяющей тему

    localStorage.setItem('theme', Theme.DARK);
  } else {
    replaceTheme(Theme.LIGHT, Theme.DARK);

    localStorage.setItem('theme', Theme.LIGHT);
  }
}

// Добавляем класс на боди и перемещаем переключатель, если в localStorage была темная тема
const localTheme = localStorage.getItem('theme');
addClassForLocalTheme();

function addClassForLocalTheme() {
  if (localTheme === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.switch.checked = true;
  }
}
