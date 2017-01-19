class DtaGravatarController{
    constructor(){
        console.log('DtaGravatarController : Je suis bien lancé');
        this.email = 'joel.torib@gmail.com';
    }
}

export const DtaGravatar=
{
     template: require('./dta-gravatar.component.html'),
     controller : DtaGravatarController
};