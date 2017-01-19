class DtaUserController{
    constructor() {}
    saveUser(form, user) {
    }
}

export const DtaUser={
    bindings:{
        user:'<',
        onSubmit:'&'
    },
    template: require('./dta-user.component.html'),
    controller:DtaUserController
}