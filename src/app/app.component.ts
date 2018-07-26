import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    schema: any
    form: any
    title = 'app';
    multiSelectData: any = ['Herr Müller', 'Frau Förster'];
    names: any = [
        'Baker, Nero X.'
        ,
        'Nguyen, Isabelle L.'
        ,
        'Forbes, Ayanna O.'
        ,
        'Mcgee, Abra I.'
        ,
        'Middleton, Laura G.'
        ,
        'Crawford, Galena C.'
        ,
        'Bartlett, Amery G.'
        ,
        'Shaffer, Bianca H.'
        ,
        'Lee, Claire Y.'
        ,
        'Horton, Gloria G.'
        ,
        'Flowers, Darrel X.'
        ,
        'Joyner, Kelsie U.'
        ,
        'Hartman, Ava Z.'
        ,
        'Vargas, Clarke Q.'
        ,
        'Owen, Harrison T.'
        ,
        'Albert, Camden K.'
        ,
        'Hoffman, Daphne K.'
        ,
        'Fletcher, Rebekah B.'
        ,
        'Velazquez, Buckminster P.'
        ,
        'Patrick, Macon M.'
        ,
        'Wall, Whilemina G.'
        ,
        'Glenn, Burton Q.'
        ,
        'Lopez, Cheyenne Q.'
        ,
        'Mcdaniel, Olympia M.'
        ,
        'Mcneil, Simon T.'
        ,
        'Merritt, Shoshana C.'
        ,
        'Meadows, Francesca T.'
        ,
        'Chambers, Quinn J.'
        ,
        'Acevedo, Norman I.'
        ,
        'Sparks, Clinton C.'
        ,
        'Hendrix, September K.'
        ,
        'Strong, Alisa D.'
        ,
        'Duran, Callum B.'
        ,
        'Holcomb, Kaseem A.'
        ,
        'Logan, Darius O.'
        ,
        'Gray, Kathleen M.'
        ,
        'Bennett, Hashim Q.'
        ,
        'Allison, Jorden D.'
        ,
        'Barnes, Jacqueline M.'
        ,
        'Rivera, Cherokee M.'
        ,
        'Velez, Chaney T.'
        ,
        'Freeman, Gage H.'
        ,
        'Day, Emerald W.'
        ,
        'Pearson, Marvin B.'
        ,
        'Gilmore, Aretha H.'
        ,
        'Sutton, Arden Z.'
        ,
        'Mcguire, Herrod P.'
        ,
        'Herrera, Suki I.'
        ,
        'Oneil, Kadeem Z.'
        ,
        'Hoover, Lionel J.'
        ,
        'Fields, Cadman W.'
        ,
        'Case, Tashya Q.'
        ,
        'Marks, Kamal C.'
        ,
        'Coffey, Abra R.'
        ,
        'Oconnor, Reese C.'
        ,
        'Saunders, Sawyer S.'
        ,
        'Edwards, Ishmael H.'
        ,
        'Howard, Remedios N.'
        ,
        'Workman, Gannon E.'
        ,
        'Hancock, Fritz V.'
        ,
        'Velazquez, Rudyard T.'
        ,
        'Perez, Edward H.'
        ,
        'Poole, Alexander W.'
        ,
        'Moses, Carson A.'
        ,
        'Valdez, Henry B.'
        ,
        'Kinney, Katelyn M.'
        ,
        'Mcguire, Jesse O.'
        ,
        'Robbins, Andrew V.'
        ,
        'Serrano, Price O.'
        ,
        'Joseph, Ursa G.'
        ,
        'Crane, Kevyn H.'
        ,
        'Alford, Axel T.'
        ,
        'Orr, Mark W.'
        ,
        'Swanson, Allistair H.'
        ,
        'Holland, Cassidy K.'
        ,
        'Guerra, Zachery S.'
        ,
        'Knapp, Kyla L.'
        ,
        'Rivera, Stephen Y.'
        ,
        'Peck, Kyle W.'
        ,
        'Erickson, Lucas G.'
        ,
        'Sparks, Randall V.'
        ,
        'West, Yen S.'
        ,
        'Hartman, Zoe K.'
        ,
        'Campos, Quamar I.'
        ,
        'Mcfadden, Mechelle J.'
        ,
        'Cantrell, Chaney K.'
        ,
        'Hartman, Dane F.'
        ,
        'Sawyer, Wesley H.'
        ,
        'Livingston, Ezekiel O.'
        ,
        'Middleton, Driscoll V.'
        ,
        'Davenport, Winifred J.'
        ,
        'Blair, Kamal C.'
        ,
        'Rogers, Noelani O.'
        ,
        'Mccoy, Cassidy L.'
        ,
        'Joyce, Jack P.'
        ,
        'Rios, Walker H.'
        ,
        'Gibbs, Cathleen B.'
        ,
        'Miranda, Fulton T.'
        ,
        'Stafford, Shoshana N.'
        ,
        'Vega, Suki L.'
    ];

    isClassActive = true;

    getSearchButton() {
      if (this.isClassActive) {
        return 'search';
      }
      return 'close';
    }

    getTitleText() {
      if (this.isClassActive) {
        return 'Meine Buchungen';
      }
      return 'Suche';
    }

    constructor() {
        this.schema = {
          "type": "object",
          "required": ["checkbox", "min", "max", "startDate", "endDate", "startDateString", "endDateString", "dropdown", "autocomplete"],
          "properties": {
            "autocomplete": {
              "$id": "data/properties/autocomplete",
              "type": "array",
              "arrayType": "autocomplete",
              "items": {
                "$id": "/properties/autocomplete/items",
                "type": "object",
                "placeholder": "Search something e.g. 'Argentina'",
                "searchKey": "data.name",
                "enum": [
                  {
                    "type": 'country',
                    "data": {
                      "name": 'Austria',
                      "capital": 'Vienna'
                    }
                  },
                  {
                    "type": 'country',
                    "data": {
                      "name": 'Australia',
                      "capital": 'Canberra'
                    }
                  },
                  {
                    "type": 'country',
                    "data": {
                      "name": 'Argentina',
                      "capital": 'Buenos Aires'
                    }
                  }
                ]
              }
            },
            "checkbox": {
              "$id": "data/properties/checkbox",
              "type": "boolean",
              "description": "An explanation about the purpose of this instance.",
              "placeholder": "Check Me",
              "default": false,
              "examples": [
                false
              ]
            },
            "duration": {
              "$id": "data/properties/duration",
              "type": "object",
              "properties": {
                "min": {
                  "$id": "data/properties/duration/properties/min",
                  "type": "integer",
                  "description": "An explanation about the purpose of this instance.",
                  "placeholder": "Min Value",
                  "default": 0,
                  "examples": [
                    5
                  ]
                },
                "max": {
                  "$id": "data/properties/duration/properties/max",
                  "type": "integer",
                  "description": "An explanation about the purpose of this instance.",
                  "placeholder": "Max Value",
                  "default": 0,
                  "examples": [
                    10
                  ]
                }
              }
            },
            "date": {
              "$id": "data/properties/date",
              "type": "object",
              "format": "date",
              "placeholder": "Select a Date",
              "startDate": {
                "$id": "data/properties/date/startDate",
                "type": "string"
              },
              "endDate": {
                "$id": "data/properties/date/endDate",
                "type": "string"
              },
              "lang": {
                "$id": "data/properties/date/lang",
                "type": "string"
              },
              "dateFormat": {
                "$id": "data/properties/date/dateFormat",
                "type": "string"
              }
            },
            "startDateString": {
              "$id": "data/properties/startDateString",
              "type": "string",
              "description": "An explanation about the purpose of this instance.",
              "placeholder": "Start Date",
              "default": "",
              "examples": [
                "2007-08-31T16:47+00:00"
              ]
            },
            "endDateString": {
              "$id": "data/properties/endDateString",
              "type": "string",
              "description": "An explanation about the purpose of this instance.",
              "placeholder": "End Date",
              "default": "",
              "examples": [
                "2007-08-31T16:47+00:00"
              ]
            },
            "dropdown": {
              "$id": "data/properties/dropdown",
              "type": "array",
              "arrayType": "dropdown",
              "items": {
                "$id": "/properties/dropdown/items",
                "type": "string",
                "buttonText": "",
                "buttonLeftPosition": true,
                "placeholder": "Select a value",
                "readonly": true,
                "enum": ["Automatic", "Manual"]
              }
            }
          }
        };

        this.form = {
          "autocomplete": [],
          "checkbox": false,
          "duration": {
            "min": 5,
            "max": 10
          },
          "date": {
            "startDate": "03/25/2018",
            "endDate": "04/12/2018",
            "lang": "en",
            "dateFormat": "MM.DD.YYYY"
          },
          "startDateString": "2007-08-31T16:47+00:00",
          "endDateString": "2007-08-31T16:47+00:00",
          "dropdown": []
        };
    }
}
