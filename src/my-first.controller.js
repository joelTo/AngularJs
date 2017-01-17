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
        this.newUser = { name: '', age: 18 };
    }

    sort(predicat) {
        if (this.predicat === predicat) {
            this.reverse = !this.reverse;
        }
        this.predicat = predicat;
    }

    addUser(form, user) {
        if (form.$invalid) return;
        let temp = angular.copy(user);
        this.UserService.addUser(temp)
            .then(user => {
                console.log(user);
                this.users.push(user);
            });
        user.name = '';
        form.$setPristine();
    }

    deleteUser(user) {
        user.deleted = true;
        // this.deleteDisabled = true;
        this.UserService.deleteUser(user)
            .then(() => {
                // user.deleted = false;
                this.users = this.users.filter(u => u.id !== user.id);
            });
    }
}