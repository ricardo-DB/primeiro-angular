export interface Product {
  id: number;
  name: string;
  price: string;
  description: string; 
}

export const products = [
  {
    id: 1,
    name: 'Casa com dois dormitórios e com sacada',
    price: 'Diaria de R$ 100,00 contato (51)998523265',  
    description: 'Av. Caxias, 2525,Imbé, disponivel janeiro,fevereiro e março de 2022',
  },
  {
    id: 2,
    name: 'Apt dois dormitórios e área de serviço',
    price: 'Diaria de R$ 80,00 contato (51)983542600',
    description: 'Av. Emancipação, 2526, tramandaí, disponivel janeiro e fevereiro de 2022',
    
  },
  {
    id: 3,
    name: 'Apt três dormitórios com uma suite ',
    price: 'Diaria de R$ 110,00 contato (51)965274123',
    description: 'Av. Osório, 951, Tramandaí disponivel janeiro, fevereiro e março de 2022'
  },
  {
    id: 4,
    name: 'Casa com três dormitórios com uma suite',
    price: 'Diaria de R$ 150,00 contato (51)998523145',  
    description: 'Av. Gravataí, 131, Imbé disponivel janeiro  de 2022'
  },
  {
    id: 5,
    name: 'Apt com dois dormitórios e com sacada',
    price: 'Diaria de R$ 100,00 contato (51)973258745',  
    description: 'Av. Novo hamburgo, 552, disponivel janeiro e fevereiro de 2022'
  },
  {
    id: 6,
    name: 'Casa com dois dormitórios, com sacada, garagem para dois carros',
    price: 'Diaria de R$ 120,00 contato (51)965852321',  
    description: 'Av. Assis Brasil, 2525, disponivel janeiro e fevereiro de 2022'
  },
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/