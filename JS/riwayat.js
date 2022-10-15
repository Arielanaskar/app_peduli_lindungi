const list_perjalanan = document.querySelectorAll('#list-perjalanan');
let lokasi = [];
const map = document.getElementById('map');


text.forEach(e => {
    lokasi.push(Object.values(e));
});

list_perjalanan.forEach((e, i) => {
    e.addEventListener('click', function() {
        let id = this.attributes['data-id'].value;
        lokasi.map(function(e){
            return e
        }).filter(function(e){
            if (e[0] === id){
                console.log(e);
                let latitude = e[9];
                let longitude = e[10];
                map.src = `https://maps.google.com/maps?q=${latitude},${longitude}&ll${latitude},${longitude}&spn=.0005,.0005&hl=en&output=embed`;
            }
        })
    })
})













