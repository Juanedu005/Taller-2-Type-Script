import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var avgSeasonElm = document.getElementById("avg-seasons");
var detailCard = document.getElementById('series-detail');
var detailImg = document.getElementById('detail-img');
var detailTitle = document.getElementById('detail-title');
var detailDesc = document.getElementById('detail-desc');
var detailLink = document.getElementById('detail-link');
renderSeriesInTable(series);
function showSeriesDetail(serie) {
    detailImg.src = serie.imageurl;
    detailImg.alt = serie.name;
    detailTitle.textContent = serie.name;
    detailDesc.textContent = serie.description;
    detailLink.href = serie.url;
    detailLink.textContent = serie.url;
    detailCard.classList.remove('d-none');
}
function renderSeriesInTable(series) {
    console.log('Desplegando Series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.idSerie, "</td>\n                           <td><span class=\"series-name\">").concat(serie.name, "</span></td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        trElement.addEventListener('click', function () { return showSeriesDetail(serie); });
        seriesTbody.appendChild(trElement);
    });
    function getavgSeasons(series) {
        var totalSeasons = 0;
        var totalSeries = 0;
        series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
        series.forEach(function (serie) { return totalSeries = totalSeries + 1; });
        var avgS = totalSeasons / totalSeries;
        return avgS;
    }
    avgSeasonElm.innerHTML = "".concat(getavgSeasons(series));
}
