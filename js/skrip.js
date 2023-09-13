class Gempa {
	constructor(lokasi, skala) {
		this.lokasi = lokasi;
		this.skala = skala;
	}

	dampak() {
		if (this.skala >= 0 && this.skala <= 2) {
			var dampak = "Tidak terasa";
		} else if (this.skala > 2 && this.skala <= 4) {
			var dampak = "Bangunan retak-retak";
		} else if (this.skala > 4 && this.skala <= 6) {
			var dampak = "Bangunan roboh";
		} else {
			var dampak = "Bangunan roboh dan berpotensi tsunami";
		}

		document.write("<p>Lokasi Gempa: " + this.lokasi + "</p>");
		document.write("<p>Skala: " + this.skala + "</p>");
		document.write("<p>Dampak: " + dampak + "</p>");
        document.write('<br>================<br>');

	}
}