export class Quote {
    showDescription:boolean;

    constructor(public name: string, public say: string, public author: string){
        this.showDescription=false;
    }

}
