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