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

    setUser(newUser) {
        return this.$http.post('http://localhost:3000/user',newUser)
        .then(function(response){
           return response.data;
        })
    }

     deleteUser(UserTodelete) {
        return this.$http.delete('http://localhost:3000/user'+'/'+UserTodelete.id)
        .then(function(response){
           return response.data;
        })
    }



  
}