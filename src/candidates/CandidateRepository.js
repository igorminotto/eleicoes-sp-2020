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
            switch(a.name) {
                case "Indecisos":
                    return 100;
                case "Outros":
                    return 99;
                default:
                    return poll.getResultOfCandidate(b.id) - poll.getResultOfCandidate(a.id);
            }
        });

        return candidates;
    }
}