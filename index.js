import{a as y,i as c,S as w}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAYUExURfn5+/v7+0dwTPn5+vr6/Pr6+vn5+/r6+5DMgkgAAAAHdFJOU4B/AKCfMK8FDdH8AAAAm0lEQVQYGQXBIZLCQBQFwFcx42PGJg1cAIPHrMdwhNg/BWSuv91Bn3POgbCfSXKshH6HyyD2D/BYRb8DlyH7B+Cxpt/d4OUycvJe2X8cKbZBX2gptHUvtBS20Re0FLSCloI+oKWwV1vRUujLNtBS7EVbaTl5L2w/jrSnG7xcK9sX4G+J9gSuJbYv8LcI7QnXImxnkhwLQZtzzsI/lNsx8TAhCU0AAAAASUVORK5CYII=";async function b(t,o,i,r){const e=new URLSearchParams({key:`${t}`,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:`${r}`,page:`${i}`});return(await y.get(`https://pixabay.com/api/?${e}`)).data}function S(t){return t.map(({webformatURL:o,largeImageURL:i,tags:r,likes:e,views:s,comments:l,downloads:f})=>`<li class="item">
          <a href="${i}"><img class="image" src="${o}" alt="${r}" /></a>
          <ul class="item-list">
            <li class="item-list-item">
              <h3 class="title">Likes</h3>
              <p class="value">${e}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Views</h3>
              <p class="value">${s}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Comments</h3>
              <p class="value">${l}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Downloads</h3>
              <p class="value">${f}</p>
            </li>
          </ul>
        </li>`).join("")}const v="45158363-d126d9ec5bd50365e414d8df4",A=document.querySelector(".form"),u=document.querySelector(".list"),d=document.querySelector(".loadMoreBtn"),a=document.querySelector(".loader"),m=15;let n=1,p="";A.addEventListener("submit",B);d.addEventListener("click",C);function B(t){d.style.display="none",u.innerHTML="",p=t.target.elements.input.value.trim(),t.preventDefault(),p!==0&&(a.style.display="block",n=1,g())}function C(){a.style.display="block",n+=1,g()}function g(){b(v,p,n,m).then(t=>{const o=t.hits;o.length!==0?(u.insertAdjacentHTML("beforeend",S(o)),t.totalHits>m*n?d.style.display="block":c.show({class:"toast",position:"topRight",messageColor:"white",message:"We're sorry, but you've reached the end of search results."}),new w(".list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):(a.style.display="none",c.show({class:"toast",position:"topRight",icon:"icon",iconUrl:h,iconColor:"white",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!"}))}).catch(t=>{c.show({class:"toast",position:"topRight",icon:"icon",iconUrl:h,iconColor:"white",messageColor:"white",title:"Error",titleColor:"white",message:"Please try again!"}),t.response?(console.error("Server error:",t.response.status),a.style.display="none"):t.request?console.error("No response from server"):console.error("Unknown error:",t.message)}).finally(()=>{const t=u.lastChild.getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"}),a.style.display="none"}),A.reset()}
//# sourceMappingURL=index.js.map
