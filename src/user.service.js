export class UserService {
    constructor($http) {
        this.$http = $http;
    }

  
     getUsers() {
        return this.$http.get('http://localhost:3000/user')
        .then(function(response){
            return response.data;
        })
    }



  
}