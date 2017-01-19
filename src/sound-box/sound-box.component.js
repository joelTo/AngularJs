import css from './sound-box.component.css';

class SoundBoxController {
    constructor() {}

    $onInit() {
        this.sounds = [
            { url: 'http://192.168.99.41:1337/10425.mp3', title: 'SON 1' },
            { url: 'http://192.168.99.41:1337/4072.mp3', title: 'SON 2' },
            { url: 'http://192.168.99.41:1337/hihat-dist02.wav', title: 'SON 3' },
            { url: 'http://192.168.99.41:1337/openhat-tight.wav',title: 'SON 4' }
        ];
    }

    delete(sound) {
        this.sounds = this.sounds.filter(s => s !== sound);
    }
}

export const SoundBox = {
    template: `
        <sound-button 
          ng-repeat="sound in $ctrl.sounds track by $index"
          on-delete="$ctrl.delete(sound)" 
          sound="sound">
        </sound-button>
    `,
    controller: SoundBoxController
}