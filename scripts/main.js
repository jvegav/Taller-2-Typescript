import { series } from './data.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
var promSeasons = document.getElementById("promedio-seasons");
var seriesDetail = document.getElementById("series-detail");
renderSeriesInTable(series);
promSeasons.innerHTML = "".concat(getSeasons(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.top, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>\n                           ");
        trElement.addEventListener("click", function () {
            showSeriesDetail(c);
        });
        seriesTbody.appendChild(trElement);
    });
}
function showSeriesDetail(serie) {
    seriesDetail.innerHTML = "\n      <div class=\"card-body\">\n          <img src = ".concat(serie.img, "></img>\n          <h5 class=\"card-title\">").concat(serie.name, "</h5>\n          <p class=\"card-text\">").concat(serie.description, "</p>\n      </div>\n  ");
}
function getSeasons(series) {
    var promSeasons = 0;
    series.forEach(function (serie) { return promSeasons = promSeasons + serie.seasons; });
    var prom = promSeasons / series.length;
    return prom;
}
