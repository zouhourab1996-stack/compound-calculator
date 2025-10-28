/* assets/js/main.js - lightweight scripts for nav, calculators, donate modal, copy */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav) toggle.addEventListener('click', () => { nav.style.display = nav.style.display==='flex'?'none':'flex'; });

  const donateBtn = document.querySelectorAll('.donate-open');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalClose = document.querySelector
