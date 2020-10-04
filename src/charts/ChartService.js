import CandidateRepository from "../candidates/CandidateRepository"
import PollRepository from "../polls/PollRepository";

export default class ChartService {
    constructor() {
        this.candidateRepository = new CandidateRepository();
        this.pollRepository = new PollRepository();
    }

    getData() {
        var lastPoll = this.pollRepository.getLastPoll();

        return {
            candidates: this.candidateRepository.sortCandidatesByPollResults(lastPoll),
            data: this.pollRepository.getPollsData()
        };
    }
}