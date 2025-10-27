
import { Serie } from "./serie.js"; 
import { series } from "./data.js";
    
let seriesTbody: HTMLElement = document.getElementById('series')!; 
const avgSeasonElm: HTMLElement = document.getElementById("avg-seasons")!;

const detailCard = document.getElementById('series-detail') as HTMLDivElement;
const detailImg = document.getElementById('detail-img') as HTMLImageElement;
const detailTitle: HTMLElement= document.getElementById('detail-title')!;
const detailDesc: HTMLElement = document.getElementById('detail-desc')!;
const detailLink= document.getElementById('detail-link') as HTMLAnchorElement;


renderSeriesInTable(series);

function showSeriesDetail(serie:Serie): void{ 
  detailImg.src = serie.imageurl;
  detailImg.alt = serie.name;
  detailTitle.textContent = serie.name;
  detailDesc.textContent = serie.description;
  detailLink.href = serie.url;
  detailLink.textContent = serie.url;
  detailCard.classList.remove('d-none');
}


function renderSeriesInTable(series: Serie[]): void {
    
    console.log('Desplegando Series')
    series.forEach((serie) =>{
        let trElement= document.createElement("tr"); 
        trElement.innerHTML = `<td>${serie.idSerie}</td>
                           <td><span class="series-name">${serie.name}</span></td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
        trElement.addEventListener('click', () => showSeriesDetail(serie));
        seriesTbody.appendChild(trElement);
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
