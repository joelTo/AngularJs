import css from './dta-sound.component.css';


class SoundController{
    constructor(){}

    $onInit(){
        this.sounds = [
            { url: 'http://localhost:1337/10415.mp3', title: 'SON 1' },
            { url: 'http://localhost:1337/10415.mp3', title: 'SON 2' },
            { url: 'http://localhost:1337/10415.mp3', title: 'SON 3' }
        ];
    }

    $onChanges(changes){
        if (changes.sound && changes.sound.currentValue) {
            this.audio = new Audio(changes.sound.currentValue.url);
            this.title = changes.sound.currentValue.title;
        }
    }

   toggle (title) {
       console.log(title)
       
        // if (this.audio.paused) this.audio.play();
        // else {
        //     this.audio.pause();
        //     this.audio.currentTime = 0;
        //}
    }


    Delete(){
        this.onDelete;
    }

    
}

export const DtaSound={

    bindings:{
        sounds:'<',
        onDelete: '&'
    },

    template: require('./dta-sound.component.html'),
    controller:SoundController
}