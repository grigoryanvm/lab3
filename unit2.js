const filteredCookie = getCookie(document.cookie);
filteredCookie.forEach(item => {
//вызываем функцию декодирования элмента массива
const decode = decodeURIComponent(item);
if(decode.split(',')[0] == productInfo.name){
if(products.childNodes.length > 0){
//фильтруем этот блок с товарами так, чтобы он нашел массив товаров, где значение названия товара из этого блока
//было равно нашему декодированному товару так же по названию и записываем это в переменную
const filteredProducts = [...products.childNodes].filter(item => item.childNodes[3].innerHTML === decode.split(',')[0])
}
}});
 const cartItemHTML= `<div class="toy" >
          <p class="tittle-product">${document.cookie}</p>
        </div>`;
      document.querySelector('.catalogCart').insertAdjacentHTML('beforeend',cartItemHTML)
function getCookie(cookie) {
//по факту, куки - это строка, с парами ключ=значение
//они разбиваются по точке с запятой
//поэтому мы разбиваем приходящие нам куки как раз таки по "; "
//записываем это всё в переменную arr
let arr = cookie.split('; ');

//для каждого элемента этой переменной
arr.map(item => {
//пушим в эту переменную(так как переменная является массивом) значение элемента по симолу "="
arr.push(item.split('='));
//таким образом получим что-то такое:
//arr = [['плюшевый мишка'][2]] то есть первый элемент - название товара, второй элемент - количество этого товара
})
//проверяем все значения на то, являются ли они массивом, и те, которые является записываем в переменную filter
const filter = arr.filter(item => Array.isArray(item) === true)
//возвращаем filter из функции
return filter;
}
