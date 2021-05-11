var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  fetch("relatedProducts.json")
  .then(response => response.json())
  .then(data=>{
    console.log(data);
    const html = data.map(user=>{
      return ` 
              <div class="container" style="padding:10px;  flex-basis:20%; border:1px solid #eee; text-align:center; display:flex; flex-direction:column; justify-content:space-between;">

              <img src="${user.img}">
              <div style="display:flex; justify-content:center; align-items:center;">
              <div style="display:flex; padding-right:5px; align-items:center;">
              <img src="./images/star.png" width="20">
              
              <p style="margin-left:5px;">${user.rating}</p>
              </div>

              <p>(${user.comment} Yorum)</p>
              </div>
              <p>${user.title}</p>
              <p style="color:#1b64b9; font-size:30px; font-weight:bold;"> &#8378; ${user.price}</p>
              <div class="sepet-container" style="display:flex; color:white; align-items:center; width:100%;">
              
              <svg style="background-color:#1764c0;"xmlns="http://www.w3.org/2000/svg" width=30 fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
</svg>
            <button onClick="onClick()" type="button" style="background-color:#2196f3; border:none; cursor:pointer;flex:1; padding:6px 0;">Sepete Ekle</button>
              </div>
              <p class="kargo" style="background:#eee; font-size:13px; width:70%; margin:0 auto; padding:5px 10px;">Bugun Kargoda</p>
              </div>
             
`
              
    }).join('')

    document.querySelector('#related').insertAdjacentHTML("afterbegin",html);

  })

  fetch("bestSeller.json")
  .then(response => response.json())
  .then(data=>{
    console.log(data);
    const seller = data.map(user=>{
      return ` 
              <div class="container" style="padding:10px;  flex-basis:20%; border:1px solid #eee; text-align:center; display:flex; flex-direction:column; justify-content:space-between;">

              <img src="${user.img}">
              <div style="display:flex; justify-content:center; align-items:center;">
              <div style="display:flex; padding-right:5px; align-items:center;">
              <img src="./images/star.png" width="20">
              
              <p style="margin-left:5px;">${user.rating}</p>
              </div>

              <p>(${user.comment} Yorum)</p>
              </div>
              <p>${user.title}</p>
              <p style="color:#1b64b9; font-size:30px; font-weight:bold;"> &#8378; ${user.price}</p>
              <div class="sepet-container" style="display:flex; color:white; align-items:center; width:100%;">
              
              <svg style="background-color:#1764c0;"xmlns="http://www.w3.org/2000/svg" width=30 fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
</svg>
            <button onClick="onClick()" type="button" style="background-color:#2196f3; border:none; cursor:pointer;flex:1; padding:6px 0;">Sepete Ekle</button>
              </div>
              <p class="kargo" style="background:#eee; font-size:13px; width:70%; margin:0 auto; padding:5px 10px;">Bugun Kargoda</p>
              </div>
             
`
              
    }).join('')

    document.querySelector('#seller').insertAdjacentHTML("afterbegin",seller);

  })


  var clicks = 0;

  function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
  };
  