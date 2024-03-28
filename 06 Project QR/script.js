const qrinput = document.getElementById('qr-input')
const qrimg = document.getElementById('qr-img')
const qrbutton = document.getElementById('qr-button')

qrbutton.addEventListener('click', () => {
    const inputValue = qrinput.value
    
    if (!inputValue) {
        alert('Please enter url or text!')
    }
})