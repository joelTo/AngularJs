class DtaGravatarController{
    constructor(){
        console.log('DtaGravatarController : Je suis bien lancé');
    }
        $onInit() {
        this.email = 'joel.torib@gmail.com';
        }
    hightlight() {
        this.hightlighted = !this.hightlighted;
    }

    }
    


export const DtaGravatar=
{
     template: require('./dta-gravatar.component.html'),
     controller : DtaGravatarController
};