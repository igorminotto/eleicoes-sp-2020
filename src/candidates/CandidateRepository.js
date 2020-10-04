import candidatesData from './candidates.json';
import Candidate from './Candidate';

export default class CandidateRepository {
    constructor() {
        this.candidates = candidatesData.map(data => new Candidate(data));
    }

    getCandidates = () => this.candidates;

    getCandidate = (id) => this.candidates.find(c => c.id === id);

    sortCandidatesByPollResults(poll) {
        var candidates = this.candidates;

        candidates.sort((a, b) => {
            if (a.name === "Indecisos") return 100;
            if (a.name === "Outros") return 99;

            return poll.getResultOfCandidate(b.id) - poll.getResultOfCandidate(a.id);
        });

        return candidates;
    }
}