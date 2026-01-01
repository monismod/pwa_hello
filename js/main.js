import { notify } from "../js/notification.js";

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  notify("notification 2", "hello again")
});

