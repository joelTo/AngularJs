import css from './sound-box.component.css';

class SoundBoxController {
    constructor() {}

    $onInit() {
        this.sounds = [
            { url: 'http://localhost:1337/10415.mp3', title: 'SON 1' },
            { url: 'http://localhost:1337/3634.mp3', title: 'SON 2' },
            { url: 'http://localhost:1337/4072.mp3', title: 'SON 3' },
            { url: 'http://localhost:1337/clap-slapper.wav' }
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