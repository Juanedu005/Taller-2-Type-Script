import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var avgSeasonElm = document.getElementById("avg-seasons");
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    console.log('Desplegando Series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.idSerie, "</td>\n                           <td><span class=\"series-name\">").concat(serie.name, "</span></td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
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
