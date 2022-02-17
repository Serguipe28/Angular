export interface IClase {
    Id: number;
    NomClase: string;
    Lugar: string;
}


export class Clase implements IClase {
    constructor(Id: number , NomClase:string, Lugar: string ) {
    this.Id = Id;
    this.NomClase = NomClase;
    this.Lugar = Lugar;

    }
    Id: number;
    NomClase: string;
    Lugar: string;
}
