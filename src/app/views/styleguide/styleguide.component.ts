import { Component } from '@angular/core';

@Component({
    selector: 'app-styleguide',
    templateUrl: './styleguide.component.html',
    styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent {
    autocompleteNoDataLabel = 'Autocomplete with Template - initially no data (NO DATA)';
    complexClone = [];
    complex = [
        {
            type: 'country',
            data: {
                name: 'Austria',
                capital: 'Vienna'
            }
        },
        {
            type: 'country',
            data: {
                name: 'Australia',
                capital: 'Canberra'
            }
        },
        {
            type: 'country',
            data: {
                name: 'Argentina',
                capital: 'Buenos Aires'
            }
        }
    ];

    initialValue = [];
    valuesToAdd = [
        {
            type: 'country',
            data: {
                name: 'Austria',
                capital: 'Vienna'
            }
        },
        {
            type: 'country',
            data: {
                name: 'Australia',
                capital: 'Canberra'
            }
        }
    ];

    searchString = 'data.name';

    getTemplate() {
        return `
      <span><%=option.data.name%> <%=option.data.capital%></span>
    `
    }

    addValues() {
        this.initialValue = this.valuesToAdd;
    }

    addMoreValues() {
        this.valuesToAdd = this.complex;
    }

    addData() {
        this.complexClone = this.complex;
        this.autocompleteNoDataLabel = 'Autocomplete with Template - initially no data (ADDED DATA)';
    }
}
