import{S as a,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();function l(n){const o="45065033-34b48c3d2ea0e7ba665d8e642",s=new URLSearchParams({key:o,q:encodeURIComponent(n),image_type:encodeURIComponent("photo"),orientation:encodeURIComponent("horizontal"),safesearch:encodeURIComponent("true")});return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>(console.log("Sorry, there are no images matching your search query. Please try again!"),console.error("Error fetching images:",t),{hits:[]}))}function d(n){const o=document.getElementById("image-container"),s=document.querySelector(".loader");s.style.display="block",o.innerHTML="",setTimeout(()=>{if(n.length>0){const t=n.map(e=>`
     <li class="gallery-link"><a class="card-link" href="${e.largeImageURL}" data-lightbox="gallery" data-title="${e.tags}">
        <div class="card">
          <img class="image" src="${e.webformatURL}" alt="${e.tags}">
          <div class="card-points">
            <div class="card-text"><p>Likes: ${e.likes}</p></div>
            <div class="card-text"><p>Views: ${e.views}</p></div>
            <div class="card-text"><p>Comments: ${e.comments}</p></div>
            <div class="card-text"><p>Downloads: ${e.downloads}</p></div>
          </div>
        </div>
      </a>
      </li> 
    `);o.innerHTML=t.join(""),s.style.display="none",new a('[data-lightbox="gallery"]').refresh()}else o.innerHTML="";s.style.display="none"},3e3)}function u(n){n.preventDefault();const o=document.getElementById("search-form"),s=document.querySelector("#search-input").value.trim();s!==""?l(s).then(t=>{t&&t.hits?d(t.hits):console.log("No images found")}).catch(t=>console.error("Error searching images:",t)):c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),o.reset()}const m=document.querySelector("#search-form");m.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers.js.map
