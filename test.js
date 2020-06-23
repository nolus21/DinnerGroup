


class PopUpInfo extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();

let imgUrl = "projects/architecture/kladkapoznan/jpg/WIZ_02_KAJAK.jpg"
const img = document.createElement('img');
img.src = imgUrl;
icon.appendChild(img);
  img.onclick = function() {
         window.location.href = 'projects/architecture/kladkapoznan/';
};  

shadow.appendChild(style);
console.log(style.isConnected);
shadow.appendChild(a);
a.appendChild(icon);
a.appendChild(info);
a.appendChild(small);

customElements.define('popup-info', PopUpInfo);