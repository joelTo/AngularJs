import md5 from 'md5';

class DtaGravatarController {
    constructor(){
       
    }

    $onInit() {
         this.md5 = md5(this.email);
         this.gravatar=('https://www.gravatar.com/avatar/'+ md5(this.email));
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
