document.addEventListener("DOMContentLoaded", function () {
     const widthInput = document.getElementById("width");
     const heightInput = document.getElementById("height");
     const materialSelect = document.getElementById("material");
     const doorCheckbox = document.getElementById("door");
     const openingSelect = document.getElementById("opening");
     const calculateBtn = document.getElementById("calculate");
     const priceResult = document.getElementById("price");
     const canvas = document.getElementById("windowCanvas");
     const ctx = canvas.getContext("2d");
 
     // Narx bo‘yicha parametrlar (m² uchun)
     const materialPrices = {
         plastic: 200000,   // Plastik materiali narxi (m²)
         aluminum: 300000,  // Alyuminiy materiali narxi (m²)
     };
 
     const doorPrice = 500000; // Qo‘shimcha eshik qo‘shish narxi
 
     // Narxni hisoblash funksiyasi
     function calculatePrice() {
         let width = parseFloat(widthInput.value);
         let height = parseFloat(heightInput.value);
         let material = materialSelect.value;
         let hasDoor = doorCheckbox.checked;
 
         if (isNaN(width)   (width) <= 0 || height <= 0) {
             priceResult.textContent = "Iltimos, o‘lchamlarni to‘g‘ri kiriting.";
             return;
         }
 
         let area = (width * height) / 1000000; // m²ga o'tkazish
         let basePrice = area * materialPrices[material];
 
         if (hasDoor) {
             basePrice += doorPrice;
         }
 
         priceResult.textContent = Narx: ${basePrice.toLocaleString()} so'm;
     }
 
     // Deraza chizish funksiyasi
     function drawWindow() {
         let width = parseInt(widthInput.value);
         let height = parseInt(heightInput.value);
 
         if (isNaN(width)  (isNaN)(height)  (width) <= 0 || height <= 0) {
             return;
         }
 
         ctx.clearRect(0, 0, canvas.width, canvas.height);
 
         let scaleX = canvas.width / 2000;
         let scaleY = canvas.height / 2000;
         let scaledWidth = width * scaleX;
         let scaledHeight = height * scaleY;
 
         ctx.fillStyle = "#add8e6";
         ctx.fillRect((canvas.width - scaledWidth) / 2, (canvas.height - scaledHeight) / 2, scaledWidth, scaledHeight);
 
         ctx.strokeStyle = "#000";
         ctx.strokeRect((canvas.width - scaledWidth) / 2, (canvas.height - scaledHeight) / 2, scaledWidth, scaledHeight);
     }
 
     // Hisoblash tugmachasiga hodisa qo‘shish
     calculateBtn.addEventListener("click", function () {
         calculatePrice();
         drawWindow();
     });
 
     // Har qanday parametr o‘zgartirilganda avtomatik chizish
     [widthInput, heightInput, materialSelect, doorCheckbox, openingSelect].forEach(element => {
         element.addEventListener("input", drawWindow);
     });
 
     // Dastlabki chizma
     drawWindow();
 });