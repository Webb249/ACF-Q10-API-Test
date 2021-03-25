function OnLoad() {
    var input = document.getElementById("ItemsPerPage")
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            DisplayPlaceHolderData()
        }
    })

    var input = document.getElementById("PageNumber")
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            DisplayPlaceHolderData()
        }
    })
}

function DisplayPlaceHolderData() {
    var itemsPerPage = document.getElementById('ItemsPerPage').value
    var pageNumber = document.getElementById('PageNumber').value
    var items = ''

    var startingPoint = CalculateStartingPoint(pageNumber, itemsPerPage)
    var endPoint = startingPoint + parseInt(itemsPerPage, 10)

    $.getJSON('https://jsonplaceholder.typicode.com/photos', function (data) {
        for (i = startingPoint; i < endPoint; i++) {
            items = items + `<p>Title: ${data[i].title}</p>
                    <a href="${data[i].url}">
                    <img src="${data[i].thumbnailUrl}"><br><br>
                    </a>`
            document.getElementById('ItemDisplay').innerHTML = items
        }
        document.close()
    });
}

function CalculateStartingPoint(pageNumber, itemsPerPage) {
    var startingPoint = 0

    startingPoint = (pageNumber-1) * itemsPerPage

    return startingPoint
}