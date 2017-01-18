export class UsersController {
    constructor (UserService, Version, $timeout) {
        this.UserService = UserService;
        this.$timeout = $timeout;
        this.version = Version;
        this.predicat = 'name';
        this.reverse = false;

        this.UserService.getUsers()
            .then(users => this.users = users);
    }

    sort(predicat) {
        if (this.predicat === predicat) {
            this.reverse = !this.reverse;
        }
        this.predicat = predicat;
    }

    deleteUser(user) {
        // sauvegarde avant suppression
        this.user = user;
        
        this.displayCancel = true;
        this.users = this.users.filter(u => u.id !== user.id);

        this.undo = this.$timeout(2000);
        this.undo.then(() => {
            this.displayCancel = false
            this.UserService.deleteUser(user)
        }, () => {
            this.displayCancel = false;
            this.users.push(this.user);
        });
    }

    cancelDelete() {
        this.$timeout.cancel(this.undo);
    }

}