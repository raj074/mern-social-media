const valid = ({ fullname, username, email, password, cf_password }) => {
    const err = {};

    if(!fullname){
        err.fullname = "Please add full name.";
    }else if(fullname.length > 25){
        err.fullname = "Full name must be smaller than 25 characters.";
    }

    if (!username) {
      err.username = "Please add User name.";
    } else if (username.replace(/ /g, '').length > 25) {
      err.username = "User name must be smaller than 25 characters.";
    }

    if (!email) {
      err.email = "Please add Email.";
    }

    if (!password) {
      err.password = "Please add Password.";
    } else if (password.length < 6) {
      err.password = "Password must be al least 6 characters long.";
    }

    if (password !== cf_password) {
      err.cf_password = "Password does not match.";
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length  
    }
};

export default valid;