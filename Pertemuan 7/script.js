// const tombol = document.getElementById("tombol");

// tombol.onclick = function () {
//     alert("Tombol diklik");
// };

// const form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const name = document.getElementById("name").value;
//     alert("Nama yang dimasukkan " + name);
// })

// function ubah() {
//     document.getElementById("judul").textContent = "Judul telah diubah";
//     document.getElementById("paragraf").innerHTML = 
//         "Paragraf telah diubah menggunakan <strong>innerHTML</strong>";
// }

// function ubahStyle() {
//     const element = document.getElementById("judul");
//     element.style.color = "red";
//     element.style.fontSize = "0.7rem";
//     element.style.textDecoration = "underline";
// }

// Validasi form
function cekAngka() {
    let angka = document.getElementById("angka").value;
    let hasil; 
    if (isNaN(angka) || angka <= 1 || angka >= 10) {
        hasil = "Angka " + angka + " tidak valid";
    } else {
        hasil = "Angka " + angka + " valid";
    }

    document.getElementById("hasil").innerHTML = hasil;
}