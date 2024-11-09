import{a as g,i as c,S as b}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();async function w(t,o,i,r){const e=new URLSearchParams({key:`${t}`,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:`${r}`,page:`${i}`});return(await g.get(`https://pixabay.com/api/?${e}`)).data}function v(t){return t.map(({webformatURL:o,largeImageURL:i,tags:r,likes:e,views:s,comments:l,downloads:y})=>`<li class="item">
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
              <p class="value">${y}</p>
            </li>
          </ul>
        </li>`).join("")}const L="46849088-f4247fdb1b297b5b75b98a0ef",d=document.querySelector(".form"),u=document.querySelector(".list"),a=document.querySelector(".loadMoreBtn"),m=document.querySelector(".loader"),h=15;let n=1,p="";d.addEventListener("submit",$);a.addEventListener("click",S);function $(t){a.style.display="none",u.innerHTML="",p=t.target.elements.input.value.trim(),t.preventDefault(),p!=0&&(m.style.display="block",n=1,f())}function S(){m.style.display="block",n+=1,f()}function f(){w(L,p,n,h).then(t=>{const o=t.hits;o.length!==0?(u.insertAdjacentHTML("beforeend",v(o)),t.totalHits>h*n?a.style.display="block":(a.style.display="none",c.show({class:"toast",position:"topRight",messageColor:"white",message:"We're sorry, but you've reached the end of search results."})),new b(".list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):(m.style.display="none",c.show({class:"toast",position:"topRight",icon:"icon",iconUrl:err,iconColor:"white",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!"}))}).catch(t=>{c.show({class:"toast",position:"topRight",messageColor:"white",title:"Error",titleColor:"white",message:"Please try again!"}),t.response?console.error("Server error:",t.response.status):t.request?console.error("No response from server"):console.error("Unknown error:",t.message)}).finally(()=>{const t=u.lastChild.getBoundingClientRect();scrollBy({top:t.top+t.height*2,behavior:"smooth"})}),d.reset()}
//# sourceMappingURL=index.js.map
