

window.addEventListener('scroll', function() {
   var navbar = document.getElementById('navbar');
   navbar.classList.toggle('sticky', window.scrollY > 0);
});



let pop = document.getElementById("pop");

function openpop() {
   pop.classList.add("pops");
}

function closepop() {
   pop.classList.remove("pops");
}