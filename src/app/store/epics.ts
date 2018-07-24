import { Injectable } from '@angular/core';

@Injectable()
export class RootEpics {
    constructor(private epics: null) {}

    public createEpics() {
        return [
            null
        ];
    }
}