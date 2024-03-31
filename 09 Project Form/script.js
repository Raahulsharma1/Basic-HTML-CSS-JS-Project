
//-------------------------------------- if-Else --------------------------------------------------


// const form = document.querySelector('form');
// var inp1 = document.querySelector('#text-1');
// var inp2 = document.querySelector('#text-2')
// const h3 = document.querySelector('h3')

// form.addEventListener('submit', function(ev) {
//     ev.preventDefault();
//    if(inp1.value === '' || inp2.value === ''){
//     h3.textContent = "!Error, Fill the box"
//     h3.style.color = "red"
//    }
   
// })

//------------------------------------------- ForEach ---------------------------------------------

var form = document.querySelector('form')
var inps = document.querySelectorAll('input[type="text"]')
var h3 = document.querySelector('h3')


form.addEventListener('submit', function(ev) {
    ev.preventDefault();

    inps.forEach(function(inp){
        if (inp.value === '') {
            document.querySelector('h3').textContent ="!Error, Fill the input box"
            h3.style.color = "red"
        }
    })

})



