export default class Candidate {
    constructor({ id, name, party, color }) {
        this.id = id;
        this.name = name;
        this.party = party;
        this.color = color;
    }

    get description() { 
        return this.name + (this.party ? ` (${this.party})` : "");
    }
}