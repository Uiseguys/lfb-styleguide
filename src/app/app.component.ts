import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
        getSearchText() {
          if (this.isClassActive) {
            return 'Search';
          }
          return 'Close';
        }
        getTitleText() {
          if (this.isClassActive) {
            return 'Meine Buchungen';
          }
          return 'Suche';
        }
}
