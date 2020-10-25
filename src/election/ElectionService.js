import CandidateRepository from "../candidate/CandidateRepository"
import Election from "./Election";
import PollRepository from "../poll/PollRepository";

export default class ElectionService {
    constructor() {
        this.candidateRepository = new CandidateRepository();
        this.pollRepository = new PollRepository();
    }

    getElection() {
        var election = Election.getDefault();
        var lastPoll = this.pollRepository.getLastPoll();

        election.candidates = this.candidateRepository.sortCandidatesByPollResults(lastPoll);
        election.pollsData = this.pollRepository.getPollsData(election);

        return election;
    }
}