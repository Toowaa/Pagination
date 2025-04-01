export interface Bus {
    id: number;
    caracteristicas: string;
    fechaCreacion: string;
    activo: boolean;
    placa: string;  
    nroBus: string; 
}

export interface ApiBus{
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface Pageable {

  pageable: ApiBus;  
  Sort: Sort;
  content: Bus[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;

 
}