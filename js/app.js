document.getElementById("p1").style.color = "red";
let bfName = document.getElementById('bfName');
let yourName = document.getElementById('yourName');
let check = document.getElementById('check');
check.addEventListener('click', ceckerLovePer);

function ceckerLovePer() {
    if (bfName.value == "Sourav" || bfName.value == "sourav" || bfName.value == "sourav ghose" || bfName.value == "Sourav Ghose" || bfName.value == "SOURAV GHOSE") {
        document.getElementById("p1").innerHTML = "100% <i class='fas fa-heart'></i>" + "<br>" + yourName.value + " Did You Know Sourav is not a name for you? This name tells about your existence in earth."
    } else if (bfName.value != "Sourav" || bfName.value != "sourav" || bfName.value != "sourav ghose" || bfName.value != "Sourav Ghose" || bfName.value != "SOURAV GHOSE") {
        document.getElementById("p1").innerHTML = yourName.value + " Loves you 50%";
    } else {
        document.getElementById("p1").innerHTML = "Why you are not giving your boyfriend Name? We will not steal your boyfriend from you."
    }
}