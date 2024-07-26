import{S as c}from"./assets/vendor-qvgbjSeY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(r){if(r.ep)return;r.ep=!0;const e=n(r);fetch(r.href,e)}})();function a(s){const o="45065033-34b48c3d2ea0e7ba665d8e642",n=new URLSearchParams({key:o,q:encodeURIComponent(s),image_type:encodeURIComponent("photo"),orientation:encodeURIComponent("horizontal"),safesearch:encodeURIComponent("true")});return fetch(`https://pixabay.com/api/?${n}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>(console.log("Sorry, there are no images matching your search query. Please try again!"),console.error("Error fetching images:",t),{hits:[]}))}function l(s){const o=document.getElementById("image-container"),n=document.querySelector(".loader");n.style.display="block",o.innerHTML="",setTimeout(()=>{if(s.length>0){const t=s.map(e=>`
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
    `);o.innerHTML=t.join(""),n.style.display="none",new c('[data-lightbox="gallery"]').refresh()}else o.innerHTML="";n.style.display="none"},3e3)}function d(s){s.preventDefault();const o=document.getElementById("search-form"),n=document.querySelector("#search-input").value.trim();n!==""?a(n).then(t=>{t&&t.hits?l(t.hits):console.log("No images found")}).catch(t=>console.error("Error searching images:",t)):console.log("Sorry, there are no images matching your search query. Please try again!"),o.reset()}const u=document.querySelector("#search-form");u.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
