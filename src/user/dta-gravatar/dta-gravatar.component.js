import md5 from 'md5';

class DtaGravatarController {
    constructor() {}

    $onInit() {
        this.md5 = md5(this.email || '');
    }

    hightlight() {
        this.hightlighted = !this.hightlighted;
        console.log(this.onDeactivate);
    }

    deact(){
        this.onDeactivate();
    }
}

export const DtaGravatar = {
    
    bindings: {
        email: '<',
        onDeactivate:'&'
    },

    template: require('./dta-gravatar.component.html'),

    controller: DtaGravatarController

};