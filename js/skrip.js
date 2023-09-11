document.getElementById("proses").addEventListener("click", transaksi);

function transaksi() {
    const nama = document.getElementById("nama").value;
    const produk = document.getElementById("produk").value;
    const jumlah = parseInt(document.getElementById("jumlah").value);

    let hargaSatuan, diskon, ppn;

    switch (produk) {
        case "TV":
            hargaSatuan = 2000000;
            break;
        case "AC":
            hargaSatuan = 3000000;
            break;
        case "Kulkas":
            hargaSatuan = 4000000;
            break;
        default:
            hargaSatuan = 0;
            break;
    }

    const hargaKotor = hargaSatuan * jumlah;

    if (produk === "Kulkas" && jumlah >= 3) {
        diskon = 0.3 * hargaKotor;
    } else if (produk === "AC" && jumlah >= 3) {
        diskon = 0.2 * hargaKotor;
    } else {
        diskon = 0.1 * hargaKotor;
    }

    ppn = 0.1 * (hargaKotor - diskon);

    const hargaBayar = (hargaKotor - diskon) + ppn;

    const dataTransaksi = `
        Nama Pelanggan: ${nama}
        Produk yang Dibeli: ${produk}
        Harga Satuan: Rp ${hargaSatuan}
        Jumlah Item Produk yang Dibeli: ${jumlah}
        Harga Kotor: Rp ${hargaKotor}
        Diskon: Rp ${diskon}
        PPN: Rp ${ppn}
        Harga Bayar: Rp ${hargaBayar}
    `;

    document.getElementById("proses").innerHTML = dataTransaksi;
    
}
