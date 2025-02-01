import"./s-C8XKJEYs.js";let r=localStorage.getItem("data-key"),s=JSON.parse(r);console.log(s);async function l(){try{if(console.log(s),!s||r=="[]"){console.log(s),document.querySelector(".saved-main-content").innerHTML="<h1 class='error-mess'>You have no saved recipes</h1>";return}const o=await fetch("https://dummyjson.com/recipes");o.ok||(document.querySelector(".saved-main-content").innerHTML="<h1 class='error-mess'>Something went wrong</h1>");const e=await o.json();document.querySelector(".saved-main-content").innerHTML=s.map(t=>`
                <div class="saved-item" data-key='${t}'>
                    <img src="${e.recipes[t].image}" alt="${e.recipes[t].name}" class="saved-item-img">
                    <div class='saved-item-text-content'>
                        <h3 class="saved-item-name">${e.recipes[t].name}</h3>
                        <div class="saved-item-btn-group">
                            <button class="see-more">
                                See More
                            </button>
                            <button class="del-item-from-saved">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 10L10 14" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M14 14L10 10" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12Z" stroke="#1B1B1B" stroke-width="1.5"/>
                                </svg>

                            </button>
                        </div>
                    </div>
                   
                </div>
            `).join(""),i(),d()}catch{document.querySelector(".saved-main-content").innerHTML="<h1 class='error-mess'>Something went wrong</h1>"}}function i(){document.querySelectorAll(".see-more").forEach(e=>{e.addEventListener("click",t=>{let a=t.target.closest(".saved-item").dataset.key;localStorage.setItem("key",a),window.location.href="/recipes/src/productinfo.html"})})}function d(){document.querySelectorAll(".del-item-from-saved").forEach(e=>{e.addEventListener("click",t=>{let a=t.target.closest(".saved-item").dataset.key,n=JSON.parse(localStorage.getItem("data-key")).filter(c=>c!==a);localStorage.setItem("data-key",JSON.stringify(n)),e.closest(".saved-item").style.display="none",JSON.parse(localStorage.getItem("data-key")).length==0&&(document.querySelector(".saved-main-content").innerHTML="<h1 class='error-mess'>You have no saved recipes</h1>")})})}l();
