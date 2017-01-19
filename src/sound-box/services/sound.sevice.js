export class SoundService{
    constructor($http,$q){
        //$q remplace Promisse
        this.$http=$http;
        this.$q = $q;
    }

    getSound(title){
        if(title){
            return this.$http.get(`${api}/${title}`)
            .then(response =>response.data);
        }
        return this.$q.resolve({title:'',format:'',time:'',url:''})
    }

    getSounds(){
        return this.$http.get(api)
        .then(response => response.data);
    }

    saveSound(sound){
        return this[sound.title ? 'updateSound' : 'addSound'](sound);
    }

    addSound(sound){
        return this.$http.post(api,sound)
            .then(response => response.data);
    }

    updateSound(sound){
        return this.$http.put(`${api}/${sound.title}`,sound)
            .then(response => response.data);
    }

    deleteSound(sound){
        return this.$http.delete(`${api}/${sound.title}`)
            .then(response => response.data);
    }

}