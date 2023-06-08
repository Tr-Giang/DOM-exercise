const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const inputNode = $('#message');
const message = $('.message');

inputNode.oninput = (e) => {
    message.textContent = e.target.value;
};
