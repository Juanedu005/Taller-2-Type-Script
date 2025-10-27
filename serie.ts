
export class Serie{

    idSerie: number;
    name: string; 
    channel: string; 
    seasons: number; 
    description: string; 
    url: string; 
    imageurl: string; 
    
    constructor(idSerie: number, name: string, channel:string, seasons:number,description:string
        , url: string, imageurl:string){
        this.idSerie= idSerie; 
        this.name= name;
        this.channel= channel; 
        this.seasons= seasons;
        this.description= description; 
        this.url=url;
        this.imageurl=imageurl;
        }

}