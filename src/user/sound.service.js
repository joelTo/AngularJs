const api = 'http://localhost:3000/Sounds';

export class SoundService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getSound(id) {
        if (id) {
            return this.$http.get(`${ api }/${ id }`)
                .then(response =>  response.data);
        }
        return this.$q.resolve({ name: 'John Doe', age: 10 });
    }

    getSounds() {
        return this.$http.get(api)
            .then(response =>  response.data);
    }

    saveSound(Sound) {
        return this[Sound.id ? 'updateSound' : 'addSound'](Sound);
    }

    addSound(Sound) {
        return this.$http.post(api, Sound)
            .then(response =>  response.data);
    }

    updateSound(Sound) {
        return this.$http.put(`${ api }/${ Sound.id }`, Sound)
            .then(response =>  response.data);  
    }

    deleteSound(Sound) {
        return this.$http.delete(`${ api }/${ Sound.id }`)
            .then(response =>  response.data);
    }
}