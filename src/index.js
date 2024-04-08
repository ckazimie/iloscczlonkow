document.getElementById('iloscCzlonkow').addEventListener('change', function () {
    var iloscCzlonkow = parseInt(this.value);
    var daneCzlonkowDiv = document.getElementById('daneCzlonkow');
    daneCzlonkowDiv.innerHTML = ''; // Wyczyszczenie poprzednich pól

    for (var i = 1; i <= iloscCzlonkow; i++) {
        var divCzlonka = document.createElement('div');

        // Tytuł członka zarządu
        divCzlonka.innerHTML = '<br><strong>Członek organu ' + i + '</strong>';

        // Imię pierwsze
        divCzlonka.innerHTML += '<br><label for="imiona' + i + '">Imię pierwsze:</label>' +
            '<input type="text" id="imie' + i + '" name="imie' + i + '" required>';
    
        // Imię drugie
        divCzlonka.innerHTML += '<br><label for="drugieImie' + i + '">Imię drugie:</label>' +
            '<input type="text" id="drugieImie' + i + '" name="drugieImie' + i + '" required>';
    
        // Nazwisko
        divCzlonka.innerHTML += '<br><label for="nazwisko' + i + '">Nazwisko:</label>' +
            '<input type="text" id="nazwisko' + i + '" name="nazwisko' + i + '" required>';

        // Adres
        divCzlonka.innerHTML += '<br><label for="adresDoreczen' + i + '">Adres:</label>' +
            '<input type="text" id="adresDoreczen' + i + '" name="adresDoreczen' + i + '" required>';

        // Adres do doręczeń
        divCzlonka.innerHTML += '<br><label for="adresDoreczen' + i + '">Adres do doręczeń:</label>' +
            '<input type="text" id="adresDoreczen' + i + '" name="adresDoreczen' + i + '" required>';

        // Funkcja w zarządzie
        divCzlonka.innerHTML += '<br><label for="funkcjaZarzadzie' + i + '">Funkcja w zarządzie: </label>' +
            '<input type="text" id="funkcjaZarzadzie' + i + '" name="funkcjaZarzadzie' + i + '" required placeholder="Proszę wskazać funkcję (np. prezes zarządu, członek zarządu)">';

        // Pole "Czy posiada PESEL?"
        divCzlonka.innerHTML += '<br><label for="czyPosiadaPesel' + i + '">Czy posiada PESEL?</label>' +
            '<select id="czyPosiadaPesel' + i + '" name="czyPosiadaPesel' + i + '" onchange="togglePeselInput(' + i + ')">' +
            '<option value="-">-</option>' +
            '<option value="tak">Tak</option>' +
            '<option value="nie">Nie</option>' +
            '</select>';

        divCzlonka.innerHTML += '<div id="daneCzlonka' + i + '"></div>';
        daneCzlonkowDiv.appendChild(divCzlonka);

        // Obsługa zmiany odpowiedzi na pytanie o PESEL
        document.getElementById('czyPosiadaPesel' + i).addEventListener('change', function () {
            var czyPosiadaPesel = this.value;
            var indexCzlonka = this.id.slice(-1);
            var daneCzlonkaDiv = document.getElementById('daneCzlonka' + indexCzlonka);
            daneCzlonkaDiv.innerHTML = ''; // Wyczyszczenie poprzednich pól

            if (czyPosiadaPesel === 'tak') {
                // Pole PESEL
                daneCzlonkaDiv.innerHTML += '<br><label for="peselCzlonka' + indexCzlonka + '">PESEL:</label>' +
                    '<input type="text" id="peselCzlonka' + indexCzlonka + '" name="peselCzlonka' + indexCzlonka + '" required>';
            } else {
                // Data ur.
                daneCzlonkaDiv.innerHTML += '<br><label for="dataCzlonka' + indexCzlonka + '">Data urodzenia:</label>' +
                    '<input type="date" id="dataCzlonka' + indexCzlonka + '" name="dataCzlonka' + indexCzlonka + '" required>';
            }
        });
    }
});