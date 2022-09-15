'use strict';

const btn=document.querySelector('.btn-search');
const input=document.querySelector('.input');


btn.addEventListener('click',function(){
    input.classList.toggle('input-active');
})