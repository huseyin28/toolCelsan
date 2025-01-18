let makaralar = [
    { "R": 148, "df": 36, "h": 91, "volume": 1331663446.2155933 },
    { "R": 135, "df": 37, "h": 83, "volume": 949447615.728468 },
    { "R": 128, "df": 40, "h": 83, "volume": 773662178.5532861 },
    { "R": 120, "df": 27, "h": 74, "volume": 734397548.2590716 },
    { "R": 105, "df": 25, "h": 65, "volume": 483183822.35603994 },
    { "R": 100, "df": 27, "h": 57, "volume": 361006695.00931025 },
    { "R": 88, "df": 23, "h": 56, "volume": 279734447.0431792 },
    { "R": 80, "df": 20, "h": 60, "volume": 253338031.58548093 },
    { "R": 72, "df": 16, "h": 48, "volume": 172245734.04654744 },
    { "R": 66, "df": 17, "h": 39, "volume": 110430406.10967363 },
    { "R": 50, "df": 12, "h": 22, "volume": 36959266.77315712 },
    { "R": 49, "df": 13, "h": 35, "volume": 53762585.58968833 }
];


$(document).ready(function () {
    $('#btnOkey').off('click').on('click', function () {
        let lng = Number($('#lng').val());
        let hcap = Number($('#cap').val());

        let hacim = Math.pow(hcap, 2) * 1000 * lng

        let makara = bul(hacim);

        if (makara != null)
            alert(`${makara.R || '???'}cm'lik makarayı deneyebilirsin`)
        else
            alert('Uygun makara hesaplanamadı :(')
    })
})

function bul(volume) {
    let hacimler = makaralar.map(({ volume }) => volume);

    let buyukler = hacimler.map(vol => vol > volume ? vol : undefined)

    let uygunVolume = Math.min(...(buyukler.filter(Number)));

    let uygunMakara = null

    makaralar.forEach(makara => {
        if (makara.volume == uygunVolume) {
            uygunMakara = makara
            return;
        }
    });

    return uygunMakara;
}


