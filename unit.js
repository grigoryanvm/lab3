

 document.addEventListener('DOMContentLoaded',function(){
 let title = document.querySelectorAll('.tittle-product');
 for (var i = 0; i < title.length; i++) {
    if(sessionStorage.getItem((title[i].innerHTML))){
     const dars =JSON.parse(sessionStorage.getItem(title[i].innerHTML))
        const cartItemHTML= `<div class="toys" >
        <div  class="flex">
      <img alt="product" src="${dars.imgSrc}" class="toys-img"/>
      <div class="descpiption-products">
           <p class="tittle-products">${dars.title}</p>
          <p class="price-products">${dars.price}</p>
          </div>
            </div>
          <article>
          <img src="free-icon-crossed-4219073.png" alt="Close" class="close-btn-toys" data-close >
          </article>
           </div>
       `;
      document.querySelector('.catalogCart').insertAdjacentHTML('beforeend',cartItemHTML)

    }  
  }})


 
window.addEventListener('click',function(event)
{
if(event.target.hasAttribute('data-cart')){
  const card=event.target.closest('.toy');
  const  productInfo={
    imgSrc: card.querySelector('img').getAttribute('src'),
    title:  card.querySelector('.tittle-product').innerText,
    price:  card.querySelector('.price-product').innerText,

  }; 
  sessionStorage.setItem(productInfo.title,JSON.stringify(productInfo));
console.log()
 const dar =JSON.parse(sessionStorage.getItem( productInfo.title))
 console.log(dar)
  const cartItemHTML= `<div class="toys" >
        <div  class="flex">
      <img alt="product" src="${dar.imgSrc}" class="toys-img"/>
      <div class="descpiption-products">
           <p class="tittle-products">${dar.title}</p>
          <p class="price-products">${dar.price}</p>
          </div>
            </div>
          <article>
          <img src="free-icon-crossed-4219073.png" alt="Close" class="close-btn-toys"  data-close >
          </article>
           </div>
       `;
      document.querySelector('.catalogCart').insertAdjacentHTML('beforeend',cartItemHTML)
}

  if(event.target.hasAttribute('data-close')){ 
  const product=event.target.closest('.toys');
  const prodactInfo=product.querySelector('.tittle-products').innerText;
  sessionStorage.removeItem(prodactInfo);
    product.parentNode.removeChild(product);
    return false;
}
})

  