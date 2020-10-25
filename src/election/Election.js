export default class Election {
    constructor(date) {
        this.date = date;
        this.candidates = null;
        this.pollsData = null;
    }

    static getDefault = () => new Election(new Date("2020-11-15T00:00:00"));

    get institutes() {
        var uniquenessFilter = (value, index, self) => self.indexOf(value) === index;

        return this.pollsData.map(p => p.institute).filter(uniquenessFilter);
    }
}