export class MyFirstController {
    constructor (UserService, Version) {
        this.UserService = UserService;
        this.version = Version;

        this.UserService.getUsers()
            .then(users => {
                this.users = users;
            });

        this.predicat = 'name';
        this.reverse = false;
        this._initUser()
    }

    sort(predicat) {
        if (this.predicat === predicat) {
            this.reverse = !this.reverse;
        }
        this.predicat = predicat;
    }

    saveUser(form, user) {
        if (form.$invalid) return;

        this.UserService.saveUser(user)
            .then(user => this.upsert(user))
            .then(() => {
                this._initUser();
                form.$setPristine(true);
            })
    }

    // ajoute user à this.users si non trouvé, le modifie si trouvé 

    upsert(user) {
         const idx = this.users.findIndex( u => u.id ===user.id );
         if (idx!==-1){// on a trouvé un utilisateur correspondant et on change son index
             this.users[idx]= user;
         }else{// on rajout un nouvel utilisateur
             this.users.push(user);
         }

    }

    deleteUser(user) {
        user.deleted = true;
        this.UserService.deleteUser(user)
            .then(() => {
                this.users = this.users.filter(u => u.id !== user.id);
            });
    }

    editUser(user) {
        this.user = angular.copy(user);
    }

    cancel() {
        this._initUser();
    }

    _initUser() {
        this.user = { name: '', age: 0 };
    }
}