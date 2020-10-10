export default class Poll {
    constructor({ id, date, institute, results }) {
        this.id = id;
        this.date = date;
        this.institute = institute;
        this.results = results;
    }

    get timestamp() {
        return new Date(this.date + " 00:00:00").getTime();
    }

    get daysToElection() {
        const electionDay = new Date("2020-11-15 00:00:00");
        const diff = new Date(this.date + " 00:00:00") - electionDay;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    getResultOfCandidate(candidateId) {
        return this.results.find(r => r[0] === candidateId)[1];
    }
}