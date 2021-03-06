import { Injectable } from '@angular/core';

const provincie = [
  { sigla: 'AG', nome: 'Agrigento', regione: 'Sicilia' },
  { sigla: 'AL', nome: 'Alessandria', regione: 'Piemonte' },
  { sigla: 'AN', nome: 'Ancona', regione: 'Marche' },
  { sigla: 'AO', nome: 'Aosta', regione: 'Valle d\'Aosta' },
  { sigla: 'AQ', nome: 'Aquila', regione: 'Abruzzo' },
  { sigla: 'AR', nome: 'Arezzo', regione: 'Toscana' },
  { sigla: 'AP', nome: 'Ascoli-Piceno', regione: 'Marche' },
  { sigla: 'AT', nome: 'Asti', regione: 'Piemonte' },
  { sigla: 'AV', nome: 'Avellino', regione: 'Campania' },
  { sigla: 'BA', nome: 'Bari', regione: 'Puglia' },
  { sigla: 'BT', nome: 'Barletta-Andria-Trani', regione: 'Puglia' },
  { sigla: 'BL', nome: 'Belluno', regione: 'Veneto' },
  { sigla: 'BN', nome: 'Benevento', regione: 'Campania' },
  { sigla: 'BG', nome: 'Bergamo', regione: 'Lombardia' },
  { sigla: 'BI', nome: 'Biella', regione: 'Piemonte' },
  { sigla: 'BO', nome: 'Bologna', regione: 'Emilia Romagna' },
  { sigla: 'BZ', nome: 'Bolzano', regione: 'Trentino Alto Adige' },
  { sigla: 'BS', nome: 'Brescia', regione: 'Lombardia' },
  { sigla: 'BS', nome: 'Brescia', regione: 'Lombardia' },
  { sigla: 'BR', nome: 'Brindisi', regione: 'Puglia' },
  { sigla: 'CA', nome: 'Cagliari', regione: 'Sardegna' },
  { sigla: 'CL', nome: 'Caltanissetta', regione: 'Sicilia' },
  { sigla: 'CB', nome: 'Campobasso', regione: 'Molise' },
  { sigla: 'CI', nome: 'Carbonia Iglesias', regione: 'Sardegna' },
  { sigla: 'CE', nome: 'Caserta', regione: 'Campania' },
  { sigla: 'CT', nome: 'Catania', regione: 'Sicilia' },
  { sigla: 'CZ', nome: 'Catanzaro', regione: 'Calabria' },
  { sigla: 'CH', nome: 'Chieti', regione: 'Abruzzo' },
  { sigla: 'CO', nome: 'Como', regione: 'Lombardia' },
  { sigla: 'CS', nome: 'Cosenza', regione: 'Calabria' },
  { sigla: 'CR', nome: 'Cremona', regione: 'Lombardia' },
  { sigla: 'KR', nome: 'Crotone', regione: 'Calabria' },
  { sigla: 'CN', nome: 'Cuneo', regione: 'Piemonte' },
  { sigla: 'EN', nome: 'Enna', regione: 'Sicilia' },
  { sigla: 'FM', nome: 'Fermo', regione: 'Marche' },
  { sigla: 'FE', nome: 'Ferrara', regione: 'Emilia Romagna' },
  { sigla: 'FI', nome: 'Firenze', regione: 'Toscana' },
  { sigla: 'FG', nome: 'Foggia', regione: 'Puglia' },
  { sigla: 'FC', nome: 'Forli-Cesena', regione: 'Emilia Romagna' },
  { sigla: 'FR', nome: 'Frosinone', regione: 'Lazio' },
  { sigla: 'GE', nome: 'Genova', regione: 'Liguria' },
  { sigla: 'GO', nome: 'Gorizia', regione: 'Friuli Venezia Giulia' },
  { sigla: 'GR', nome: 'Grosseto', regione: 'Toscana' },
  { sigla: 'IM', nome: 'Imperia', regione: 'Liguria' },
  { sigla: 'IS', nome: 'Isernia', regione: 'Molise' },
  { sigla: 'SP', nome: 'La-Spezia', regione: 'Liguria' },
  { sigla: 'LT', nome: 'Latina', regione: 'Lazione' },
  { sigla: 'LE', nome: 'Lecce', regione: 'Puglia' },
  { sigla: 'LC', nome: 'Lecco', regione: 'Lombardia' },
  { sigla: 'LI', nome: 'Livorno', regione: 'Toscana' },
  { sigla: 'LO', nome: 'Lodi', regione: 'Lombardia' },
  { sigla: 'LU', nome: 'Lucca', regione: 'Toscana' },
  { sigla: 'MC', nome: 'Macerata', regione: 'Marche' },
  { sigla: 'MN', nome: 'Mantova', regione: 'Lombardia' },
  { sigla: 'MS', nome: 'Massa-Carrara', regione: 'Toscana' },
  { sigla: 'MT', nome: 'Matera', regione: 'Basilicata' },
  { sigla: 'VS', nome: 'Medio Campidano', regione: 'Sardegna' },
  { sigla: 'ME', nome: 'Messina', regione: 'Sicilia' },
  { sigla: 'MI', nome: 'Milano', regione: 'Lombardia' },
  { sigla: 'MO', nome: 'Modena', regione: 'Emilia Romagna' },
  { sigla: 'MB', nome: 'Monza-Brianza', regione: 'Lombardia' },
  { sigla: 'NA', nome: 'Napoli', regione: 'Campania' },
  { sigla: 'NO', nome: 'Novara', regione: 'Piemonte' },
  { sigla: 'NU', nome: 'Nuoro', regione: 'Sardegna' },
  { sigla: 'OG', nome: 'Ogliastra', regione: 'Sardegna' },
  { sigla: 'OT', nome: 'Olbia Tempio', regione: 'Sardegna' },
  { sigla: 'OR', nome: 'Oristano', regione: 'Sardegna' },
  { sigla: 'PD', nome: 'Padova', regione: 'Veneto' },
  { sigla: 'PA', nome: 'Palermo', regione: 'Sicilia' },
  { sigla: 'PR', nome: 'Parma', regione: 'Emilia Romagna' },
  { sigla: 'PV', nome: 'Pavia', regione: 'Lombardia' },
  { sigla: 'PG', nome: 'Perugia', regione: 'Umbria' },
  { sigla: 'PU', nome: 'Pesaro-Urbino', regione: 'Marche' },
  { sigla: 'PE', nome: 'Pescara', regione: 'Abruzzo' },
  { sigla: 'PC', nome: 'Piacenza', regione: 'Emilia Romagna' },
  { sigla: 'PI', nome: 'Pisa', regione: 'Toscana' },
  { sigla: 'PT', nome: 'Pistoia', regione: 'Toscana' },
  { sigla: 'PN', nome: 'Pordenone', regione: 'Friuli Venezia Giulia' },
  { sigla: 'PZ', nome: 'Potenza', regione: 'Basilicata' },
  { sigla: 'PO', nome: 'Prato', regione: 'Toscana' },
  { sigla: 'RG', nome: 'Ragusa', regione: 'Sicilia' },
  { sigla: 'RA', nome: 'Ravenna', regione: 'Emilia Romagna' },
  { sigla: 'RC', nome: 'Reggio-Calabria', regione: 'Calabria' },
  { sigla: 'RE', nome: 'Reggio-Emilia', regione: 'Emilia Romagna' },
  { sigla: 'RI', nome: 'Rieti', regione: 'Lazio' },
  { sigla: 'RN', nome: 'Rimini', regione: 'Emilia Romagna' },
  { sigla: 'RM', nome: 'Roma', regione: 'Lazio' },
  { sigla: 'RO', nome: 'Rovigo', regione: 'Veneto' },
  { sigla: 'SA', nome: 'Salerno', regione: 'Campania' },
  { sigla: 'SS', nome: 'Sassari', regione: 'Sardegna' },
  { sigla: 'SV', nome: 'Savona', regione: 'Liguria' },
  { sigla: 'SI', nome: 'Siena', regione: 'Toscana' },
  { sigla: 'SR', nome: 'Siracusa', regione: 'Sicilia' },
  { sigla: 'SO', nome: 'Sondrio', regione: 'Lombardia' },
  { sigla: 'TA', nome: 'Taranto', regione: 'Puglia' },
  { sigla: 'TE', nome: 'Teramo', regione: 'Abruzzo' },
  { sigla: 'TR', nome: 'Terni', regione: 'Umbria' },
  { sigla: 'TO', nome: 'Torino', regione: 'Piemonte' },
  { sigla: 'TP', nome: 'Trapani', regione: 'Sicilia' },
  { sigla: 'TN', nome: 'Trento', regione: 'Trentino Alto Adige' },
  { sigla: 'TV', nome: 'Treviso', regione: 'Veneto' },
  { sigla: 'TS', nome: 'Trieste', regione: 'Friuli Venezia Giulia' },
  { sigla: 'UD', nome: 'Udine', regione: 'Friuli Venezia Giulia' },
  { sigla: 'VA', nome: 'Varese', regione: 'Lombardia' },
  { sigla: 'VE', nome: 'Venezia', regione: 'Veneto' },
  { sigla: 'VB', nome: 'Verbania', regione: 'Piemonte' },
  { sigla: 'VC', nome: 'Vercelli', regione: 'Piemonte' },
  { sigla: 'VR', nome: 'Verona', regione: 'Veneto' },
  { sigla: 'VV', nome: 'Vibo-Valentia', regione: 'Calabria' },
  { sigla: 'VI', nome: 'Vicenza', regione: 'Veneto' },
  { sigla: 'VT', nome: 'Viterbo', regione: 'Lazio' }
];



@Injectable()
export class ProvinciaService {

  constructor() { }

  public getList(): Provincia[] {
    return provincie.slice();
  }
}

export interface Provincia {
  sigla: string;
  nome: string;
  regione: string;
}

