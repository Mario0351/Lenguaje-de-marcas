const profileImage = document.getElementById('profileImage');

profileImage.addEventListener('mouseover', () => {
    profileImage.style.boxShadow = '0 0px 1000px rgba(246, 20, 20, 0.5)';
    profileImage.src = "https://img2.rtve.es/i/?w=1600&i=1673113417228.jpg";
});
profileImage.addEventListener('mouseout', () => {
    profileImage.style.boxShadow = 'none';
    profileImage.src = "https://img.a.transfermarkt.technology/portrait/big/69751-1710080407.jpg?lm=1";
})

var ChangeNameColorButton = document.getElementById('ChangeNameColor');
// var fullNameH1 = document.getElementById('fullName');
const titleName = document.getElementById('fullName');

// ChangeNameColorButton.addEventListener('click', function() {
//     console.warn("click........");
//     alert("Ahora el nombre va a cambiar de color");
//     fullNameH1.style = "color: red; font-style: italic;";
    
// });

ChangeNameColorButton.addEventListener('click', () => {
    
    const colorName = titleName.style.color;
    debugger;

    if (titleName.style.color == '') {
        titleName.style.color = 'blue';
        titleName.textContent = "1º DAW"
    }else{
        titleName.style.color = '';
        titleName.textContent = 'Mario Mancebo Romero'
    }
});


const OcultarNombre = document.getElementById('Ocultar');

OcultarNombre.addEventListener('clic', () => {
    debugger;

    if (titleName.style.display === "Mario Mancebo Romero") {
        titleName.style.display = "none";
    }else{
        titleName.style.display = "Mario Mancebo Romero";
    }
});

document.getElementById("toggleButton").addEventListener("click", function() {
    var form = document.getElementById("contactForm");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
        this.textContent = "Ocultar";
    } else {
        form.style.display = "none";
        this.textContent = "Contacto";
    }
});