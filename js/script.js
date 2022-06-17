const btn = document.querySelectorAll('.card-btn');
const info = document.querySelectorAll('.info');

btn.forEach((el) => {
    el.addEventListener('click' , () => {
        el.classList.toggle('rotation');
        el.nextElementSibling.classList.toggle('change');
    })
});