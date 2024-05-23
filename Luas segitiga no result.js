<script>
      

    const alas = document.getElementById('alas')
    const tinggi = document.getElementById('tinggi')
    const hitung= document.getElementById('hitung')
    const output = document.getElementById('output')
    hitung.addEventListener('click', function(){
        let a = alas.value
        let t = tinggi.value
        let l = 0.5*a*t
        output.textContent= `${l}`
    })
   
    
    resetButton.addEventListener('click', function() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('output').textContent= '';
   
    
    

});

</script>