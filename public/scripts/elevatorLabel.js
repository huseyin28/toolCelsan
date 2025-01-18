const labels = [];
refreshList();

$(document).ready(function () {
    $('#wrapper').addClass('no-print')
    $('#page-top').append('<div class="w210" id="etiketler"></div>')
})

function defaultLabels() {
    let customer = "S. Minimak"
    let orderno = "REF : BALKANLAR"
    let product = "10mm 8*19s KÖ GALV"
    let extent = 125
    let count = 25
    let newLabel = new Label(customer, orderno, product, extent, count);

    labels.push(newLabel)

    refreshList();
}


function addNewLabel() {
    let customer = $('#customer').val()
    let orderno = $('#orderno').val()
    let product = $('#product').val()
    let extent = $('#extent').val()
    let count = $('#count').val()
    let newLabel = new Label(customer, orderno, product, extent, count);

    labels.push(newLabel)

    refreshList();
}

function refreshList() {
    $('#labelsList').html('')
    labels.forEach(label => {
        $('#labelsList').append(label.getListRow())
    })
    if (labels.length == 0) {
        $('#btnPrint').hide()
    } else {
        $('#btnPrint').show()
    }
}

function removeLabel(id) {
    labels.forEach((item, i) => {
        if (item.id == id) {
            labels.splice(i, 1);
            refreshList();
            return
        }
    })
}

function Print() {
    $('#etiketler').html("");
    labels.forEach(label => {
        $('#etiketler').append(label.toHTML())
    })
    window.print();
    $('#etiketler').html("");
}


function getPrint() {
    return `<div class="d-grid gap-2"><button class="btn btn-primary" onclick="Print()" type="button">YAZDIR</button></div>`
}


class Label {
    constructor(customer, orderno, product, extent, count) {
        const d = new Date();

        this.id = d.getTime();
        this.customer = customer
        this.orderno = orderno
        this.product = product
        this.extent = extent
        this.count = count
    }

    toHTML() {
        let str = "";
        for (let i = 0; i < this.count; i++) {
            str +=
                `<div class="etiket">
                <div class="firma">${this.customer}</div>
                <div>${this.orderno}</div>
                <div>${this.product} (${this.extent}m)</div>
            </div>`

        }
        return str;
    }

    getListRow() {
        return `
        <tr>
            <td>${this.customer}</td>
            <td>${this.orderno}</td>
            <td>${this.product}</td>
            <td>${this.extent}m</td>
            <td>${this.count} adet</td>
            <td><button class="btn btn-link" onclick="removeLabel(${this.id})"><i class="fa-solid fa-xmark"></i></button></td>
        </tr>`
    }
}