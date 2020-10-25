import pollsData from './polls.json';
import Poll from './Poll';

class PollRepository {
    constructor() {
        this.polls = pollsData.map(data => new Poll(data));
    } 

    getLastPoll = () => this.polls[this.polls.length - 1];

    getPollsData = (election) => this.polls.map(poll => {
        var pollData = { 
            institute: poll.institute,
            daysToElection: poll.daysTo(election.date), 
        };

        for (var { candidateId, value } of poll.results) {
            pollData[candidateId] = value;
        }

        return pollData;
    });
}

export default PollRepository;