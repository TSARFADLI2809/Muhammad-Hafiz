// Mengubah background Navbar saat di-scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (this.scrollY > 20) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// Menu Toggle untuk tampilan Mobile
const menuBtn = document.querySelector(".menu-btn-toggle");
const menu = document.querySelector(".navbar .menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
    const icon = menuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
});

// Menutup menu otomatis setelah link di-klik (Tampilan Mobile)
const menuLinks = document.querySelectorAll(".navbar .menu li a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        const icon = menuBtn.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    });
});

// Animasi Teks Mengetik Sederhana (Typing Effect)
const words = ["Mahasiswa Manajemen"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector(".typing").innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector(".typing").innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 50);
    };
    loopDeleting();
}

// Menjalankan efek ketik saat halaman dimuat
document.addEventListener("DOMContentLoaded", typingEffect);
 java