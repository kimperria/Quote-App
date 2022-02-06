export class Quote {
    showDescription:boolean;

    constructor(public name: string, public say: string, public author: string, public postedDate: Date){
        this.showDescription=false;
    }

}
