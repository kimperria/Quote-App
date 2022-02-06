export class Quote {
    showDescription:boolean;

    constructor(public title: string, public name: string, public say: string, public author: string, public postedDate: Date){
        this.showDescription=false;
    }

}
