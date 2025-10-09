/* eslint-disable no-undef */
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const form = document.querySelector('#form');
const textarea = document.querySelector('#textarea');
const messages = document.querySelector('#messages');
const button = document.querySelector('button');

textarea.addEventListener('input', () => {
  if (textarea.value.trim() === '') {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});

textarea.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || (e.ctrlKey && e.key === 'Enter')) {
    if (textarea.value.trim() !== '') {
      e.preventDefault();
      form.requestSubmit();
    }
  }
});

let pr = prompt('Введите ваше имя');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (pr.trim() === '') {
    pr = 'Anonym';
  }

  const message = `${pr} : ${textarea?.value}`;
  textarea.value = '';
  button.disabled = true;

  socket.emit('chat', message);
});

socket.on('chat', (message) => {
  const p = document.createElement('p');
  p.textContent = message;
  messages.appendChild(p);
});
