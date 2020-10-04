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

    getResultOfCandidate(candidateId) {
        return this.results.find(r => r.candidateId === candidateId).value;
    }
}