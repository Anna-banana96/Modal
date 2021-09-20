let modal = document.querySelector(".modal"), image = document.querySelector("#myimg"),
modalimg = document.querySelector("#img01");

let captionText = document.getElementById("caption");

image.addEventListener("click", function() {
  modal.style.display = "block";
  modalimg.src = this.src;
  captionText.innerHTML = this.alt;
})

document.querySelector(".close").addEventListener("click", function() {
  modal.style.display = "none";
})