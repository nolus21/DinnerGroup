/*const template = document.createElement('template');
template.innerHTML = `
<style>
    h3 {
        color: coral;
    }
</style>
<div class="user-card">
<h3></h3>

</div>
`;
*/
/*imageF();
function imageF()
{
   var el = document.getElementById("imageF");
   el.innerHTML="<img src=\"projects\architecture\wyspianski\jpg\witraze2.jpg" width=\"400px\" height=\"150px\">";
   el.appendChild
}*/


class Aleppo1 extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <a href=\"projects\spatialstrategies\aleppo"\>
        <figure id="image"></figure>
        <span><small>Urban Emergencies</small><br>
        Post-war reconstruction strategies for Aleppo</span>
        </a>`;
       
     
    }
}


window.customElements.define('aleppo-1', Aleppo1);


/*<div>
        <em></em><img class="lazy" data-src="projects\architecture\uwdziedziniec\jpg\DUSK_NORMAL.jpg" alt="University of Warsaw Courtyard">
        </div>*/