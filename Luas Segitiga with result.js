<script>
        function hitungLuas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(alas) || isNaN(tinggi)) {
        document.getElementById('result').textContent = 'Harap masukkan nilai alas dan tinggi';
        return;
    }

    const luas = 0.5 * alas * tinggi;
    document.getElementById('result').textContent = `L = 1/2 x ${alas} x ${tinggi}\nL = ${luas}`;
}

function resetForm() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('result').textContent = '';
}

    </script>