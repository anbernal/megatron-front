import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ComprasService{

    constructor( private http: HttpClient ) { }

    public buscaCompras(){
        let url = "/api/lista-compras-cadastradas";
        return this.http.get<any>(url);
    }

}

