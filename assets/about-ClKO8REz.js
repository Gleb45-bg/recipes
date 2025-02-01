import"./s-C8XKJEYs.js";const t=document.querySelector(".main-content");async function o(){try{const n=await fetch("https://dummyjson.com/recipes");if(!n.ok)throw t.innerHTML="<h1>Something went wrong</h1>",new Error(`HTTP error! status: ${n.status}`);const s=await n.json();let r=localStorage.getItem("key"),i=s.recipes[r];if(!i){t.innerHTML="<h1>Recipe not found</h1>";return}let a=i.ingredients.map(e=>`<li>${e}</li>`).join(""),c=i.instructions.map(e=>`${e}`).join(" ");t.innerHTML=`
            <div class="card">
                    <img src="${i.image}" alt="${i.name}" class="card-img">
                   
                <div class="rest-inform">
                    <h2 class="card-name">${i.name}</h2>
                    <div class='card-blocks-group'>
                    <div class='st-block'>
                        <div class='ingr-content'>
                            <h3 class='ingr-title'>Ingredients</h3>
                            <nav class="ingredients">
                                <ul>${a}</ul>
                            </nav>
                        </div>
                        
                        <div class="additional-info">
                            <div>
                                <h3 class="prep-time">${i.prepTimeMinutes} min</h3>
                                <p>Prepear time</p>
                            </div>
                            <div>
                                <h3 class="cook-time">${i.cookTimeMinutes} min</h3>
                                <p>Cooking time</p>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div class='sc-block'>
                        <h3 class='instr-title'>Instructions</h3>
                        <p class="instructions">${c}</p>
                    </div>
                    </div>
                    
                </div>
            </div>`}catch(n){t.innerHTML="<h1>Something went wrong</h1>",console.error(n)}}o();
