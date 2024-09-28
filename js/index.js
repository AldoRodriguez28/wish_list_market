let wishList = [];
renderBucketWishList();
const maxItemBucket = 3; // maximo numero de elementos que puedes agregar a bucket.

function testAddToWiishList(producto, plantilla) {
  let wishList_count = document.getElementById("wishList-count");
  console.log(wishList_count.textContent);
  if (parseInt(wishList_count.textContent) <= maxItemBucket - 1) {
    addToWishlist(producto, plantilla);
  } else {
    Swal.fire({
      title: "Limite excededido",
      text: `Excediste el numero maximo de plantillas  permitidas (${maxItemBucket})`,
      icon: "warning",
    });
  }
}
function addToWishlist(product, plantilla) {
  let wishList_count = document.getElementById("wishList-count");
  // Obtener el elemento <i> dentro del elemento
  var heartIcon = product.querySelector("i");

  if (product.classList.contains("active_wishList")) {
    product.classList.remove("active_wishList");
    for (let i = 0; i < wishList.length; i++) {
      // Verifica si el nombre coincide con el string a buscar
      if (wishList[i].name === plantilla.name) {
        // Si coincide, elimina el elemento del array
        wishList.splice(i, 1);
        // Como eliminamos un elemento, debemos decrementar i para evitar saltar uno
        i--;
      }
    }
    wishList_count.textContent = wishList.length;
    renderBucketWishList();
  } else {
    product.classList.add("active_wishList");
    let objectAdd = {
      id: `${product.id}`,
      name: `${plantilla.name}`,
      Desktop_Thumbnail_Url: `${plantilla.Desktop_Thumbnail_Url}`,
    };
    wishList.push(objectAdd);
    wishList_count.textContent = wishList.length;
    renderBucketWishList();
  }
  console.log(wishList);
  console.log(product.classList.contains("active_wishList"));
}
function bucketToggle() {
  let bucket = document.getElementById("bucket");
  if (!bucket.classList.contains("active")) {
    bucket.classList.add("active");
  } else {
    bucket.classList.remove("active");
  }
}

function renderBucketWishList() {
  let wishList_count = document.getElementById("wishList-count");
  let container_bucket = document.getElementById("container_item_bucket");
  let html = ``;
  if (wishList.length > 0) {
    wishList.forEach((element) => {
      html += `<div class="bucket_container">
            <div class="img_item_bucket"><img height="60" width="auto" src="${element.Desktop_Thumbnail_Url}" alt=""></div>
            <div class="name_item_bucket">
                <p>${element.name}</p>
            </div>
            <div class="trash">
                <i class="fa fa-trash-o" onclick="javascript: deleteItem_bucket(${element.id}, this)"></i>                                
            </div>
        </div>
        <hr>`;
    });
    container_bucket.innerHTML = html;
    wishList_count.textContent = wishList.length;
  } else {
    let html = `<span>"Ups, la lista de deseos esta vacía"</span> `;
    container_bucket.innerHTML = html;
    wishList_count.textContent = wishList.length;
  }
}
function deleteItem_bucket(product, item) {
  for (let i = 0; i < wishList.length; i++) {
    // Verifica si el nombre coincide con el string a buscar
    if (wishList[i].id === product.id) {
      // Si coincide, elimina el elemento del array
      wishList.splice(i, 1);
      // Como eliminamos un elemento, debemos decrementar i para evitar saltar uno
      i--;
    }
  }
  //cambiando el estatus de el icono whishlist de el elemento
  let heartIcon = item;
  product.classList.remove("active_wishList");

  renderBucketWishList();
}
function submitBucket() {
  let sutbmitObj =
    wishList.length > 0 ? wishList : "ups, la lista de deseos esta vacía";

  // Crear un arreglo de strings con los valores de la propiedad "id" de cada elemento
  const ids = wishList.map((item) => item.id);

  // Crear un solo string separado por comas con los valores de los "id"
  const idsString = ids.join(", ");

  console.log(idsString); // Imprimir el string de ids
}

/*JS para thank U pages */

/*JS para thank U pages */
