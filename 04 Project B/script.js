const clock = document.querySelector('#clock') 


// setInterval() : The setInterval () method used to repeats a block of code at every given timing event.

setInterval(function(){

    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)