let photos = [
    { numOfRooms: 1, path: "content/1_1.jpg", path2: "content/1_2.jpg", path3: "content/1_3.jpg", address: "Салавата Юлаева, 17а", district: "Калининский район", square: 34, floor: 7, numOfFloors: 10, price: 9500 },
    { numOfRooms: 2, path: "content/2_1.jpg", path2: "content/2_2.jpg", path3: "content/2_3.jpg", path4: "content/2_4.jpg", address: "Свободы, 104а", district: "Советский район", square: 60, floor: 2, numOfFloors: 5, price: 9000 },
    { numOfRooms: 1, path: "content/3_1.jpg", path2: "content/3_2.jpg", path3: "content/3_3.jpg", address: "Ереванская, 14", district: "Ленинский район", square: 40, floor: 3, numOfFloors: 9, price: 9000 },
    { numOfRooms: 1, path: "content/4_1.jpg", path2: "content/4_2.jpg", address: "Дарвина, 107", district: "Советский район", square: 31, floor: 5, numOfFloors: 5, price: 9000 },
    { numOfRooms: 1, path: "content/5_1.jpg", path2: "content/5_2.jpg", path3: "content/5_3.jpg", address: "Ереванская, 14", district: "Ленинский район", square: 40, floor: 3, numOfFloors: 9, price: 9000 },
    { numOfRooms: 1, path: "content/6_1.jpg", path2: "content/6_2.jpg", path3: "content/6_3.jpeg", address: "Молодогвардейцев, 21", district: "Курчатовский район", square: 40, floor: 8, numOfFloors: 10, price: 10000 },
    { numOfRooms: 1, path: "content/7_1.jpg", path2: "content/7_2.jpg", address: "Двинская, 3", district: "Калининский район", square: 49, floor: 10, numOfFloors: 10, price: 11500 },
    { numOfRooms: 1, path: "content/8_1.jpg", path2: "content/8_2.jpg", path3: "content/8_3.jpg", address: "Комарова, 112", district: "Тракторозаводский район", square: 34, floor: 6, numOfFloors: 9, price: 8000 },
    { numOfRooms: 1, path: "content/9_1.jpg", path2: "content/9_2.jpg", path3: "content/9_3.jpg", path4: "content/9_4.jpg", path5: "content/9_5.jpg", address: "Котина, 21", district: "Тракторозаводский район", square: 34, floor: 4, numOfFloors: 10, price: 8000 },
    { numOfRooms: 2, path: "content/10_1.jpg", path2: "content/10_2.jpg", path3: "content/10_3.jpg", address: "Ленина проспект, 28", district: "Центральный район", square: 60, floor: 4, numOfFloors: 10, price: 17000 },
    { numOfRooms: 3, path: "content/11_1.jpg", path2: "content/11_2.jpg", path3: "content/11_3.jpg", path4: "content/11_4.jpg", address: "Петра Сумина, 2", district: "Центральный район", square: 84, floor: 15, numOfFloors: 19, price: 15000 },
    { numOfRooms: 2, path: "content/12_1.jpg", path2: "content/12_2.jpg", path3: "content/12_3.jpg", address: "Комарова, 114а ", district: "Тракторозаводский район", square: 50, floor: 4, numOfFloors: 10, price: 8000 },
    { numOfRooms: 2, path: "content/13_1.jpg", path2: "content/13_2.jpg", path3: "content/13_3.jpg", address: "Свободы, 92а", district: "Центральный район", square: 54, floor: 2, numOfFloors: 5, price: 12000 },
    { numOfRooms: 1, path: "content/14_1.jpg", path2: "content/14_2.jpg", address: "Академика Сахарова, 22 ", district: "Центральный район", square: 43, floor: 7, numOfFloors: 10, price: 14000 },
    { numOfRooms: 1, path: "content/15_1.jpg", path2: "content/15_2.jpg", path3: "content/15_3.jpg", path4: "content/15_4.jpg", address: "Академика Сахарова, 30", district: "Центральный район", square: 43, floor: 3, numOfFloors: 10, price: 13000 },
];
let phit = document.getElementById('kontentik');
let vbok = document.querySelector('.bok');
let col;
function vuvodPhotos(newPhotos){
    for (let i=0; i < newPhotos.length; i++){
        vbok.style = 'display: inline-block';
        col = document.createElement("div");
        col.classList.add("col");
        col.innerHTML=`<div class="card" data-id="${i}">
                            <img src="${newPhotos[i].path}" class="card-img-top" alt="kvartira"  style = "height: 200px">
                            <div class="card-body">
                                <h5>${newPhotos[i].numOfRooms}-к <span>${newPhotos[i].address}</span></h5>
                                <p>${newPhotos[i].district}</p>
                                <p>${newPhotos[i].square}м<sup>2</sup></p>
                                <p>${newPhotos[i].floor}/<span>${newPhotos[i].numOfFloors} этаж</span></p>
                                <span>${newPhotos[i].price} ₽/мес</span>
                            </div>
                        </div>`;
        phit.append(col);
    }
}
vuvodPhotos(photos);
let m = document.getElementById("modalImg");
let modalBody = m.querySelector(".modal-body");
function openModal(elem){   
     
    let id = elem.getAttribute("data-id");
    
   /* for (let i=0; i < photos.length; i++){
        phit.style = 'height: 200px';
        vbok.style = 'display: inline-block';
        col = document.createElement("div");
        col.classList.add("col");*/
    modalBody.innerHTML =`
    <h5 class="modal-title" id="staticBackdropLabel" style="color: white;">${photos[id].address}</h5>
    <p style="color: white;">${photos[id].district}</p>
        <p style="color: white;">${photos[id].square}м<sup>2</sup></p>
        <p style="color: white;">${photos[id].floor}/<span>${photos[id].numOfFloors} этаж</span></p>
        <span style="color: white;">${photos[id].price} ₽/мес</span>
    <div class="card" data-id=${photos[id].numOfRooms}>
    
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active">
    
    <img src="${photos[id].path}" class="card-img-top d-block w-100" alt="kvartira" data-id="${id}">
    </div>
    <div class="carousel-item">
    <img src="${photos[id].path2}" class="card-img-top d-block w-100" alt="kvartira" data-id="${id.style='height: 200px;'}">
    </div>
    <div class="carousel-item">
    <img src="${photos[id].path3}" class="card-img-top d-block w-100" alt="kvartira" data-id="${id.style='height: 200px;'}">
    </div>
    <div class="carousel-item">
    <img src="${photos[id].path4}" class="card-img-top d-block w-100" alt="kvartira" data-id="${id.style='height: 200px;'}">
    </div>
    <div class="carousel-item">
    <img src="${photos[id].path5}" class="card-img-top d-block w-100" alt="kvartira" data-id="${id.style='height: 200px;'}">
    </div>
    
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Предыдущий</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Следующий</span>
  </a>
</div>`;
phit.append(col);
    m.style = "display: block";
    m.classList.remove("fade");
    }
//}
function closeModal(){
    m.style="";
    m.classList.add("fade");
}
phit.addEventListener("click", (event) => {
    let elem = event.target;
    elem = elem.closest(".card");
    if(elem !==null)
      openModal(elem);
});
let close = m.querySelector(".close");
close.addEventListener("click", (event) => {
    closeModal();
});
m.addEventListener("click", (event) => {
    console.log(event);
    if(event.target.classList.contains("modal")){
        closeModal();
    }
});
