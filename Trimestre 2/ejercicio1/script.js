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
var fullNameH1 = document.getElementById('fullName');

// ChangeNameColorButton.addEventListener('click', function() {
//     console.warn("click........");
//     alert("Ahora el nombre va a cambiar de color");
//     fullNameH1.style = "color: red; font-style: italic;";
    
// });

ChangeNameColorButton.addEventListener('click', () => {
    const titleName = document.getElementById('fullName');
    const colorName = titleName.style.color;
    debugger;

    if (titleName.style.color == '') {
        titleName.style.color = 'blue';
    }else{
        titleName.style.color = '';
    }
})