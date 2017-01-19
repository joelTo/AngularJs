import angular from 'angular';

import { SoundButton } from './sound-button/sound-button.component';
import { SoundBox } from './sound-box.component';

export default angular.module('SoundBox', [])

.component('soundButton', SoundButton)
.component('soundBox', SoundBox)

.name;