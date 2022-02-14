class User {
    
    static userInstance = User;
    login;
    token;
  
    constructor() {
    
    }
  
    static getInstance() {
      if (!User.userInstance) {
          User.userInstance = new User();
      }
      return User.userInstance;
    }
  }

  export {User};

  

