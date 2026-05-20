function tambahPeminjam() {
    // 1. Ambil data (ID harus sama persis dengan yang di HTML)
    const nama = document.getElementById('namaInput').value;
    const costum = document.getElementById('costumInput').value;
    const tanggal = document.getElementById('tanggalInput').value;
    const metodepembayaran = document.getElementById('metodepembayaraninput').value; // Huruf kecil sesuai HTML
    const ukuranbaju = document.getElementById('ukuranbajuinput').value; // Huruf kecil sesuai HTML

    // 2. Validasi (Variabel di sini tidak boleh pakai spasi)
    if (nama === "" || costum === "" || tanggal === "" || metodepembayaran === "" || ukuranbaju === "") {
        alert("Mohon isi semua data formulir!");
        return;
    }

    // 3. Ambil elemen tabel body
    const tabel = document.getElementById('tabelData').getElementsByTagName('tbody')[0];

    // 4. Buat baris baru
    const barisBaru = tabel.insertRow();

    // 5. Masukkan data ke kolom-kolomnya
    barisBaru.insertCell(0).innerHTML = nama;
    barisBaru.insertCell(1).innerHTML = costum;
    barisBaru.insertCell(2).innerHTML = tanggal;
    barisBaru.insertCell(3).innerHTML = metodepembayaran;
    barisBaru.insertCell(4).innerHTML = ukuranbaju;

    // 6. Bersihkan form setelah input
    document.getElementById('namaInput').value = "";
    document.getElementById('costumInput').value = "";
    document.getElementById('tanggalInput').value = "";
    document.getElementById('metodepembayaraninput').value = "";
    document.getElementById('ukuranbajuinput').value = "";
}