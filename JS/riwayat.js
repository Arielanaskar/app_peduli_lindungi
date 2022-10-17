const list_perjalanan = document.querySelectorAll('#list-perjalanan');
let lokasi = [];
const map = document.getElementById('map');
const back = document.getElementById('back');
const details = document.querySelector('.details');
const namaJalan = document.getElementById('namaJalan');
const waktuCheckin = document.getElementById('waktuCheckin');
const waktuCheckout = document.getElementById('waktuCheckout');
const lamaPerjalanan = document.getElementById('lamaPerjalanan');


text.forEach(e => {
    lokasi.push(Object.values(e));
});

list_perjalanan.forEach((e, i) => {
    e.addEventListener('click', function() {
        details.style.animation = 'slide 0.5s linear 0.5s forwards';
        

        let id = this.attributes['data-id'].value;
        lokasi.map(function(e){
            return e
        }).filter(function(e){
            if (e[0] === id){
                console.log(e);
                let latitude = e[9];
                let longitude = e[10];
                map.src = `https://maps.google.com/maps?q=${latitude},${longitude}&ll${latitude},${longitude},q=${latitude},${longitude}&ll${latitude},${longitude}&spn=.0005,.0005&hl=en&output=embed`;
                namaJalan.innerText = e[6];
                waktuCheckin.innerText = e[5];
                waktuCheckout.innerText = e[7];
                lamaPerjalanan.innerText = e[8];
            }
        })
    })
})



back.addEventListener('click', function(){
    // alert('asu')
    details.style.animation = 'none';
})

console.log(back)









