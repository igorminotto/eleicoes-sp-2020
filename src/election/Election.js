export default class Election {
    constructor(date) {
        this.date = date;
    }

    static getDefault = () => new Election(new Date("2020-11-15T00:00:00"));
}