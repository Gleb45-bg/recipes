import"./s-C8XKJEYs.js";const l=document.querySelector(".main-content");let r=0,g=null,c="";function f(){r=parseInt(localStorage.getItem("page"))||0}function p(){localStorage.setItem("page",r)}async function u(){if(c)try{const s=await fetch("https://dummyjson.com/recipes");if(!s.ok){l.innerHTML="<h1 class='error-mess'>Something went wrong</h1>",l.classList.toggle("error");return}const o=await s.json(),e=o.recipes.filter(t=>t.tags.some(a=>a===c));g=o.recipes.filter(t=>t.tags.some(a=>a===c)),e.length>=15?(document.querySelector(".tag-area").innerHTML=`<button class='filter-btn'>${c} <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 10L10 14" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14 14L10 10" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round"/>
<path d="M21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12Z" stroke="#1B1B1B" stroke-width="1.5"/>
</svg>
</button>`,l.innerHTML=e.slice(r*15,r*15+15).map((t,a)=>{let n=t.tags.map(i=>`<button class="tag" data-tag='${i}'>${i}</button>`).join("");return`
                        <div class="recipe-card" data-key='${a}'>
                            <h3>${t.name}</h3>
                            <img src="${t.image}" alt="${t.name}">
                            <div class='tags-group'>
                                ${n}
                            </div>
                            <div class='card-btn-group'>
                                <button class='s-more-btn'>See More</button>
                                <button class='save-product'>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.1168 1.66283C9.4928 0.95492 10.5072 0.95492 10.8832 1.66283L12.8392 5.34568C12.9837 5.61783 13.2457 5.80813 13.5492 5.8615L17.6562 6.58374C18.4457 6.72256 18.7591 7.68727 18.202 8.2636L15.3039 11.262C15.0897 11.4835 14.9897 11.7915 15.0327 12.0966L15.615 16.2258C15.7269 17.0195 14.9062 17.6157 14.186 17.264L10.4388 15.4343C10.1619 15.299 9.83809 15.299 9.56119 15.4343L5.81402 17.264C5.09374 17.6157 4.27311 17.0195 4.38503 16.2258L4.96729 12.0966C5.01032 11.7915 4.91027 11.4835 4.69611 11.262L1.79796 8.2636C1.24088 7.68727 1.55434 6.72256 2.34379 6.58374L6.45083 5.8615C6.75432 5.80813 7.01627 5.61782 7.16081 5.34568L9.1168 1.66283Z" stroke="#1B1B1B" stroke-width="1.5"/>
                                    </svg>
                                </button>
                            </div>
                        </div>`}).join(""),document.querySelector("footer").classList.remove("load")):(document.querySelector(".tag-area").innerHTML=`<button class='filter-btn'>${c}<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 10L10 14" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14 14L10 10" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round"/>
<path d="M21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12Z" stroke="#1B1B1B" stroke-width="1.5"/>
</svg>
</button>`,l.innerHTML=e.map((t,a)=>{let n=t.tags.map(i=>`<button class="tag" data-tag='${i}'>${i}</button>`).join("");return`
                        <div class="recipe-card" data-key='${a}'>
                            <h3>${t.name}</h3>
                            <img src="${t.image}" alt="${t.name}">
                            <div class='tags-group'>
                                ${n}
                            </div>
                            <div class='card-btn-group'>
                                <button class='s-more-btn'>See More</button>
                                <button class='save-product'>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.1168 1.66283C9.4928 0.95492 10.5072 0.95492 10.8832 1.66283L12.8392 5.34568C12.9837 5.61783 13.2457 5.80813 13.5492 5.8615L17.6562 6.58374C18.4457 6.72256 18.7591 7.68727 18.202 8.2636L15.3039 11.262C15.0897 11.4835 14.9897 11.7915 15.0327 12.0966L15.615 16.2258C15.7269 17.0195 14.9062 17.6157 14.186 17.264L10.4388 15.4343C10.1619 15.299 9.83809 15.299 9.56119 15.4343L5.81402 17.264C5.09374 17.6157 4.27311 17.0195 4.38503 16.2258L4.96729 12.0966C5.01032 11.7915 4.91027 11.4835 4.69611 11.262L1.79796 8.2636C1.24088 7.68727 1.55434 6.72256 2.34379 6.58374L6.45083 5.8615C6.75432 5.80813 7.01627 5.61782 7.16081 5.34568L9.1168 1.66283Z" stroke="#1B1B1B" stroke-width="1.5"/>
                                    </svg>
                                </button>
                            </div>
                        </div>`}).join(""),document.querySelector("footer").classList.toggle("dis")),document.querySelector("footer").classList.remove("load"),m(),L(),v(),h(),b()}catch(s){l.innerHTML="<h1 class='error-mess'>Something went wrong</h1>",l.classList.toggle("error"),console.error(s)}finally{document.querySelector("footer").classList.toggle("load")}else try{const s=await fetch("https://dummyjson.com/recipes");if(!s.ok){l.innerHTML="<h1 class='error-mess'>Something went wrong</h1>",l.classList.toggle("error");return}const o=await s.json();g=o.recipes,o.recipes.length>=15?l.innerHTML=o.recipes.slice(r*15,r*15+15).map((e,t)=>{t=t+15*r;let a=e.tags.map(n=>`<button class="tag" data-tag='${n}'>${n}</button>`).join("");return`
                        <div class="recipe-card" data-key='${t}'>
                            <h3>${e.name}</h3>
                            <img src="${e.image}" alt="${e.name}">
                            <div class='tags-group'>
                                ${a}
                            </div>
                            <div class='card-btn-group'>
                                <button class='s-more-btn'>See More</button>
                                <button class='save-product'>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.1168 1.66283C9.4928 0.95492 10.5072 0.95492 10.8832 1.66283L12.8392 5.34568C12.9837 5.61783 13.2457 5.80813 13.5492 5.8615L17.6562 6.58374C18.4457 6.72256 18.7591 7.68727 18.202 8.2636L15.3039 11.262C15.0897 11.4835 14.9897 11.7915 15.0327 12.0966L15.615 16.2258C15.7269 17.0195 14.9062 17.6157 14.186 17.264L10.4388 15.4343C10.1619 15.299 9.83809 15.299 9.56119 15.4343L5.81402 17.264C5.09374 17.6157 4.27311 17.0195 4.38503 16.2258L4.96729 12.0966C5.01032 11.7915 4.91027 11.4835 4.69611 11.262L1.79796 8.2636C1.24088 7.68727 1.55434 6.72256 2.34379 6.58374L6.45083 5.8615C6.75432 5.80813 7.01627 5.61782 7.16081 5.34568L9.1168 1.66283Z" stroke="#1B1B1B" stroke-width="1.5"/>
                                    </svg>
                                </button>
                            </div>
                        </div>`}).join(""):(l.innerHTML=o.recipes.map((e,t)=>{let a=e.tags.map(n=>`<button class="tag" data-tag='${n}'>${n}</button>`).join("");return`
                        <div class="recipe-card" data-key='${t}'>
                            <h3>${e.name}</h3>
                            <img src="${e.image}" alt="${e.name}">
                            <div class='tags-group'>
                                ${a}
                            </div>
                            <div class='card-btn-group'>
                                <button class='s-more-btn'>See More</button>
                                <button class='save-product'>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.1168 1.66283C9.4928 0.95492 10.5072 0.95492 10.8832 1.66283L12.8392 5.34568C12.9837 5.61783 13.2457 5.80813 13.5492 5.8615L17.6562 6.58374C18.4457 6.72256 18.7591 7.68727 18.202 8.2636L15.3039 11.262C15.0897 11.4835 14.9897 11.7915 15.0327 12.0966L15.615 16.2258C15.7269 17.0195 14.9062 17.6157 14.186 17.264L10.4388 15.4343C10.1619 15.299 9.83809 15.299 9.56119 15.4343L5.81402 17.264C5.09374 17.6157 4.27311 17.0195 4.38503 16.2258L4.96729 12.0966C5.01032 11.7915 4.91027 11.4835 4.69611 11.262L1.79796 8.2636C1.24088 7.68727 1.55434 6.72256 2.34379 6.58374L6.45083 5.8615C6.75432 5.80813 7.01627 5.61782 7.16081 5.34568L9.1168 1.66283Z" stroke="#1B1B1B" stroke-width="1.5"/>
                                    </svg>
                                </button>
                            </div>
                        </div>`}).join(""),document.querySelector("footer").classList.toggle("dis")),document.querySelector("footer").classList.remove("load"),m(),L(),v(),h()}catch(s){l.innerHTML="<h1 class='error-mess'>Something went wrong</h1>",l.classList.toggle("error"),console.error(s)}finally{document.querySelector("footer").classList.toggle("load")}}function m(){document.querySelectorAll(".s-more-btn").forEach(o=>{o.addEventListener("click",t=>{e(t)});function e(t){const n=t.target.closest(".recipe-card").dataset.key;localStorage.setItem("key",n),window.location.href="/recipes/src/productinfo.html"}})}function L(){const s=document.querySelectorAll(".save-product");let o=JSON.parse(localStorage.getItem("data-key"));s.forEach(e=>{let t=!1;o&&o.includes(e.closest(".recipe-card").dataset.key)&&(t=!0,t&&e.classList.toggle("dis")),e.addEventListener("click",a=>{if(t=!t,t){const i=a.target.closest(".recipe-card").dataset.key;let d=JSON.parse(localStorage.getItem("data-key"))||[];d.push(i),localStorage.setItem("data-key",JSON.stringify(d))}if(!t){const i=a.target.closest(".recipe-card").dataset.key;let d=JSON.parse(localStorage.getItem("data-key"));d&&(d=d.filter(w=>w!==i),localStorage.setItem("data-key",JSON.stringify(d)))}t?e.classList.toggle("dis"):e.classList.remove("dis")})})}function v(){const s=document.querySelector(".button-prev"),o=document.querySelector(".button-next");g&&(s.addEventListener("click",()=>{if(r--,r<0){r++;return}window.scrollTo({top:0}),p(),u()}),o.addEventListener("click",()=>{if(r++,g.length-r*15<=0){r--;return}window.scrollTo({top:0}),p(),u()}))}document.addEventListener("beforeunload",p,h);document.querySelector(".logo-button").addEventListener("click",C);function b(){document.querySelector(".filter-btn").addEventListener("click",()=>{c="",localStorage.setItem("filter",c),window.location.reload()})}function h(){document.querySelectorAll(".tag").forEach(o=>{o.addEventListener("click",()=>{c=o.dataset.tag,r=0,window.scrollTo({top:0}),u(),c&&localStorage.setItem("filter",c)})})}function k(){c=localStorage.getItem("filter")}function C(){r=0,c="",localStorage.setItem("filter",c),localStorage.setItem("page",r),window.location.reload()}k();f();u();
