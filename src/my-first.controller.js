export class MyFirstController {
    constructor (UserService, Version) {

       this.UserService = UserService;
        this.version = Version;

        UserService.getUsers()
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
        this.UserService.setUser(temp).then(user => {
                console.log(user);
                this.users.push(user);
            });
        user.name = '';
    }

    //   deleteUser(element) {
    //         this.UserService.deleteUser(element)
    //         .then(  this.users = this.users.filter(u => u.id !== element.id));
           
    //         }

     deleteUser(user) {
         this.deleteDisabled=true;
        this.UserService.deleteUser(user)
            .then(() => {
                this.users = this.users.filter(u => u.id !== user.id);
            });
    }

}
