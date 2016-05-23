export class API{   
    constructor() {   
        this.status = true;
        this.timeValue = "2:00 AM";
    }
    get currentStatus() {
        return this.status;
    }
    set currentStatus(value) {
        this.status = value;
    }
}

