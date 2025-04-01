export interface Bus {
    id: number;
    caracteristicas: string;
    fechaCreacion: string;
    activo: boolean;
    placa: string;  
    nroBus: string; 
}

export interface ApiBus{
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface Pageable {

  ApiBus: ApiBus;  
  Sort: Sort;
  content: Bus[];
}