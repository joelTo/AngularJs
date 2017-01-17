export class UserService {
    constructor($http,$timeout) {
        this.$http = $http;
        this.$timeout=$timeout;
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

    //  deleteUser(UserTodelete) {
    //     return this.$http.delete('http://localhost:3000/user'+'/'+UserTodelete.id)
    //     .then(function(response){
    //        return response.data;
    //     })
    // }

    
    deleteUser(user) {
        return this.$timeout(3000)
            .then(() => this.$http.delete('http://localhost:3000/user'+'/'+user.id))
            .then(response =>  response.data);
    }



  
}