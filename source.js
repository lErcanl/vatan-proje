//swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
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

  //One Cıkan Urunler
  var relatedShipping;
  var text;
  fetch("relatedProducts.json")
  .then(response => response.json())
  .then(data=>{
    console.log(data);

    const html = data.map(product=>{
      relatedShipping=product.samedayshipping;
      if  (relatedShipping) {
         text="Bugün Kargoda";
      }   

      else{
        text="Bugün Kargoya Verilemez"
      }
      return ` 
              <div class="product">
              <a href="${product.dest_url}">
              <img src="${product.img}">
              </a>
              <div class="product__container">
              <div class="product__img">
              <img src="./images/star.png" width="20">
              
              <p class="ml-5">${product.rating}</p>
              </div>

              <p class="comment__heading" >(${product.comment} Yorum)</p>
              </div>
              <p class="code__heading">${product.code}</p>

              <p>${product.title}</p>
              <p  class="price__heading"> ${product.price} ${product.cur}</p>
              <div class="basket__btn__container">
              
              <svg style="background-color:#1764c0;"xmlns="http://www.w3.org/2000/svg" width=33 fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
</svg>
            <button onClick="onClick()" class="basket__btn" type="button">Sepete Ekle</button>

              </div>
              <p class="cargo__heading" id="shipping">${text}</p>

              </div>
             
`
          
    }).join('')
  
    
    document.querySelector('#related').insertAdjacentHTML("afterbegin",html);
 
  })

  //Cok Satanlar

  var sellerShipping;
  fetch("bestSeller.json")
  .then(response => response.json())
  .then(data=>{
    const seller = data.map(product=>{
      sellerShipping=product.samedayshipping;
      if  (sellerShipping) {
          var text="Bugün Kargoda";
      }
      else{
          text="Bugün Kargoya Verilemez";
      }
      return ` 
      <div class="product">
      <a href="${product.dest_url}">
      <img src="${product.img}">
      </a>
      <div class="product__container">
      <div class="product__img">
      <img src="./images/star.png" width="20">
      
      <p class="ml-5">${product.rating}</p>
      </div>

      <p class="comment__heading" >(${product.comment} Yorum)</p>
      </div>
      <p class="code__heading">${product.code}</p>

      <p>${product.title}</p>
      <p  class="price__heading"> ${product.price} ${product.cur}</p>
      <div class="basket__btn__container">
      
      <svg style="background-color:#1764c0;"xmlns="http://www.w3.org/2000/svg" width=33 fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
</svg>
    <button onClick="onClick()" class="basket__btn" type="button">Sepete Ekle</button>

      </div>
      <p class="cargo__heading" id="shipping">${text}</p>

      </div>
                       
`
           
    }).join('')

    document.querySelector('#seller').insertAdjacentHTML("afterbegin",seller);
   
  })

  //click event shopping
  var clicks = 0;

  function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
  };
  