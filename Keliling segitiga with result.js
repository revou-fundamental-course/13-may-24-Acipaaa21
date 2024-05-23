 <script>
        function hitungKeliling() {
    const s1 = parseFloat(document.getElementById('s1').value);
    const s2 = parseFloat(document.getElementById('s2').value);
    const s3 = parseFloat(document.getElementById('s3').value);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
        document.getElementById('result').textContent = 'Harap masukkan semua sisi';
        return;
    }

    const keliling = s1 + s2 + s3;
    document.getElementById('result').textContent = `K = S1 + S2 + S3\n K = ${s1} + ${s2} + ${s3}\n K = ${keliling}`;
}

function resetForm() {
    document.getElementById('s1').value = '';
    document.getElementById('s2').value = '';
    document.getElementById('s3').value = '';
    document.getElementById('result').textContent = '';
}

    </script>