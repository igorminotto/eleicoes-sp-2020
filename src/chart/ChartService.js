import CandidateRepository from "../candidate/CandidateRepository"
import Election from "../election/Election";
import PollRepository from "../poll/PollRepository";

export default class ChartService {
    constructor() {
        this.candidateRepository = new CandidateRepository();
        this.pollRepository = new PollRepository();
    }

    getData() {
        var election = Election.getDefault();
        var lastPoll = this.pollRepository.getLastPoll();

        return {
            election,
            candidates: this.candidateRepository.sortCandidatesByPollResults(lastPoll),
            pollsData: this.pollRepository.getPollsData(election)
        };
    }
}