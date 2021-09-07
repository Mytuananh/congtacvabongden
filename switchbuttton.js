class Switchbutton {
    constructor(_electriclamp) {
        this.electriclamp = _electriclamp
    }
    getElectriclamp() {
        return this.electriclamp;
    }
    Conecttolamp(electriclamp) {
        this.electriclamp = electriclamp;
    }

    turnonoffe() {
        this.electriclamp.turnonoff();
    }
}