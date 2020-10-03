import candidates from '../data/candidates.json';
import polls from '../data/polls.json';

class PollRepository {
    getLinearData() {
        var series = [];
        
        for(const poll of polls) {
            const { date, institute, results } = poll;

            for(const candidateResult of results) {
                const { candidateId, value } = candidateResult;
                const candidate = candidates.find(c => c.id === candidateId);

                const seriesId = candidate.name + (candidate.party ? ` (${candidate.party})` : "");
                const currentSeries = series.find(s => s.id === seriesId);
                const currentData = { 
                    x: date, 
                    y: parseInt(value * 100, 10) 
                };

                if (currentSeries) {
                    currentSeries.data.push(currentData)
                } else {
                    series.push({
                        id: seriesId,
                        color: candidate.color,
                        data: [currentData]
                    });
                }
            }
        }

        return series;
    }
}

export default PollRepository;