class Elctriclamp {
    constructor(_name, _status) {
        this.name = _name;
        this.status = _status;
    }
    getName() {
        return this.name;
    }
    turnonoff() {
        this.status = !this.status;
    }
}