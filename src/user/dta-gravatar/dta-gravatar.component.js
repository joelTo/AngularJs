class DtaGravatarController {
    constructor(){}

    $onInit() {
        //this.email = 'tmoyse@gmail.com';
    }

    hightlight() {
        this.hightlighted = !this.hightlighted;
    }
}

export const DtaGravatar = {
    
    bindings: {
        email: '<'
    },

    template: require('./dta-gravatar.component.html'),

    controller: DtaGravatarController

};
