export class UserController {
    constructor($routeParams, UserService) {
        this.UserService = UserService;
        this.UserService.getUser($routeParams.id)
            .then(user => this.user = user);
    }

    saveUser(form, user) {
        if (form.$invalid) return;
        this.UserService.saveUser(user)
            // .then(user => this.upsert(user))
            // .then(() => {
            //     this._initUser();
            //     form.$setPristine(true);
            // });
    }

    // editUser(user) {
    //     this.user = angular.copy(user);
    // }

    // cancel() { // ???
    //     this.user = { name: '', age: 0 };
    // }

    // // // ajoute user à this.users si non trouvé, le modifie si trouvé 
    // // upsert(user) {
    // //     const idx = this.users.findIndex(u => u.id === user.id);
    // //     if (idx !== -1) { // user trouvé mise à jour
    // //         this.users[idx] = user;
    // //     } else { // on ajoute le user
    // //         this.users.push(user);
    // //     }
    // // }

}