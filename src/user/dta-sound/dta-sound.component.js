import css from './dta-sound.component.css';


class SoundController{
    constructor(){}

    $onInit(){
            this.audio = new Audio('http://192.168.99.41:1337/10415.mp3');
    }

    $onChanges(changes){
        
    }

    Play(){
        this.audio.play();
    }

    Delete(){
        this.onDelete;
    }

    
}

export const DtaSound={

    bindings:{
        audio:'<',
        onDelete: '&'
    },

    template: require('./dta-sound.component.html'),
    controller:SoundController
}