export interface IAlumno {
    Nombre: string;
    Apellidos: string;
    direccion: string;
    fnac: string;
    claseId: number;
}
export class Alumno implements IAlumno{
    constructor(Nombre:string, Apellidos: string, direccion: string, fnac:string, claseId: number) {
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.direccion = direccion;
        this.fnac = fnac;
        this.claseId = claseId;
    }
    Nombre: string;
    Apellidos: string;
    direccion: string;
    fnac: string;
    claseId: number;
}