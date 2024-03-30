// document.querySelector('#images').addEventListener('click', function(e){
//     console.log(e.target.parentNode);
//     let removeIt = e.target.parentNode
//     removeIt.remove()
// })

// In this first we select element and then create a function now log function parameter with a 'TARGET' it is used to give the adjuct detail about that particular element and the we use 'PARENTNODE' because if we remove using target it remove only photo not the whole 'LI' that's why we select it and then simply remove photo.

//----------------------------------------------------------------------------------------------

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})

// Here we console log target along with tagName it is return tag name and then we simply apply condition and remove images.