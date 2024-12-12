import{S as h,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const p=o=>{const r="47345226-0bb2374200c7482689dd59086",s=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits)},d=o=>o.map(({webformatURL:r,largeImageURL:s,tags:t,likes:e,views:i,comments:c,downloads:g})=>`
    <li class="gallery-item">
    <a href="${s}">
    <img class="image-down" src="${r}", alt="${t}" width="360px" height="150px">
    </a>

        <ul class="description-img">
        <li class="description-img-item">
            <h2 class="title-img">Likes</h2>
            <p class="characteristics-img">${e}</p>
        </li>
        <li class="description-img-item">
            <h2 class="title-img">Views</h2>
            <p class="characteristics-img">${i}</p>
        </li>
        <li class="description-img-item">
            <h2 class="title-img">Comments</h2>
            <p class="characteristics-img">${c}</p>
        </li>
        <li class="description-img-item">
            <h2 class="title-img">Downloads</h2>
            <p class="characteristics-img">${g}</p>
        </li>
    </ul>
    </li>
    `).join(""),l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",u=new h(".gallery a",{captionsData:"alt",captionDelay:250}),A=document.querySelector(".form"),n=document.querySelector(".gallery"),m=document.querySelector(".loader");A.addEventListener("submit",f);function f(o){o.preventDefault(),n.innerHTML="";let r=o.target.elements.name;const s=r.value.trim();if(!s){a.show({title:"",iconUrl:`${l}`,backgroundColor:"red",messageColor:"white",message:"Enter the data for the search!",position:"topRight"});return}m.style.display="inline-block",p(s).then(t=>{t.length===0&&a.show({title:"",iconUrl:`${l}`,backgroundColor:"red",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.insertAdjacentHTML("beforeend",d(t)),u.refresh(),r.value="",m.style.display="none"}).catch(t=>console.log(t))}
//# sourceMappingURL=index.js.map
