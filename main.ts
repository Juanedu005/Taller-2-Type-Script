
import { Serie } from "./serie.js"; 
import { series } from "./data.js";
    
let seriesTbody: HTMLElement = document.getElementById('series')!; 
const avgSeasonElm: HTMLElement = document.getElementById("avg-seasons")!;


renderSeriesInTable(series);




function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando Series')
    series.forEach((serie) =>{
        let trElement= document.createElement("tr"); 
        trElement.innerHTML = `<td>${serie.idSerie}</td>
                           <td><span class="series-name">${serie.name}</span></td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement)
    });


function getavgSeasons(series: Serie[]){
    let totalSeasons:number =0; 
    let totalSeries: number=0; 
    series.forEach((serie) => totalSeasons= totalSeasons + serie.seasons);
    series.forEach((serie) => totalSeries=totalSeries + 1);

    let avgS  : number= totalSeasons/totalSeries;
    return avgS
}

avgSeasonElm.innerHTML= `${getavgSeasons(series)}`


}
