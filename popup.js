// Create a class for the element


class PopUpInfo extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
      
    

      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});
  
      // Create spans

      const a = document.createElement('span');
      a.setAttribute('class', 'a');
      
  /* info !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
      const icon = document.createElement('span');
      icon.setAttribute('class', 'icon');
      icon.setAttribute('tabindex', 0);
  
      const info = document.createElement('span');
      info.setAttribute('class', 'info');
      info.innerHTML = "Infrastructure <br />"
      info.onclick = function() {
        window.location.href = 'projects/architecture/kladkapoznan/' 
        document.body.style.cursor="url('first.cur'),help";
        ;};

        
        
/* info !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
      const small = document.createElement('span');
      small.setAttribute('class', 'small');
  
      // Take attribute content and put it inside the info span

      /*const text = this.getAttribute('data-text');*/
      small.innerHTML = "Pedestrian and Cycling Bridge";
      small.onclick = function() {
        window.location.href = 'projects/architecture/kladkapoznan/' 
        document.body.style.cursor="url('first.cur'),help";
        ;};

      
      // heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere text  
      // Insert icon
       // heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere image
      let imgUrl = "projects/architecture/kladkapoznan/jpg/WIZ_02_KAJAK.jpg"
      const img = document.createElement('img');
      img.src = imgUrl;
      icon.appendChild(img);
        img.onclick = function() {
               window.location.href = 'projects/architecture/kladkapoznan/';
      };  
      // Create some CSS to apply to the shadow dom
      const style = document.createElement('style');
      console.log(style.isConnected);
  
      style.textContent = `
      
        
    


        .info {
          background: white;
          opacity: 100;
          transition: 0.6s all;
          position: relative;
          display: block;
          vertical-align: baseline;
        line-height: 1.1;
        font-size: 80%;
        letter-spacing: 0.05em;
        position: relative;
        top: 10px;
        }
  
        .small {
            background: white;
            opacity: 100;
            transition: 0.6s all;
            position: relative;
            vertical-align: baseline;
	        background: transparent;
	        font-variant-ligatures: none;
            display: inline-block;
            font-size: 100%;
            letter-spacing: 0.05em;
            top: 10px;
          }
        
        img {
         max-width: 100%;
		height: auto;;
        }
        .icon:hover + .info, .icon:focus + .info {
          opacity: 1;
        }
      `;
  
      // Attach the created elements to the shadow dom
      shadow.appendChild(style);
      console.log(style.isConnected);
      shadow.appendChild(a);
      a.appendChild(icon);
      a.appendChild(info);
      a.appendChild(small);
    }
  }
  
  // Define the new element
  customElements.define('popup-info', PopUpInfo);