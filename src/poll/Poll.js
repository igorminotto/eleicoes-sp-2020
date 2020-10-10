import CandidateResult from './CandidateResult';

export default class Poll {
    constructor({ id, date, institute, results }) {
        this.id = id;
        this.dateString = date;
        this.institute = institute;
        this.results = results.map(result => new CandidateResult(id, ...result));
    }

    get date() {
        return new Date(this.dateString + "T00:00:00")
    }

    daysTo(date) {
        const diff = this.date - date;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    getResultOfCandidate(candidateId) {
        return this.results.find(r => r.candidateId === candidateId).value;
    }
}