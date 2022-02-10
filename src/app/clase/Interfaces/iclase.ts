export interface IClase {
    Id: number;
    NomClase: string;
}


export class Clase implements IClase {
    constructor(Id: number , NomClase:string ) {
    this.Id = Id;
    this.NomClase = NomClase;

    }
    Id: number;
    NomClase: string;
}
