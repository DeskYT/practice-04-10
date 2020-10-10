const User = require('./../models/user.model');
module.exports.createUser = async({body}, socket) => {
    try{
        console.log('ok')
        const user = new User(body);
        const newUser = await user.save();
        return newUser;
    } catch(e){console.log(e)}
};
module.exports.getUser = async({id}) => {
    try{
        const user = await User.findById(id);
        if(user) return user;
        return 'Bad request';
    } catch(e){console.log(e)}
};
module.exports.updateUser = async({id, body}) => {
    try{
        const updateUser = await User.findByIdAndUpdate(id,body);
        if(updateUser) return updateUser;
        return 'Bad request';
    } catch(e){console.log(e)}
};
module.exports.deleteUser = async({id}) => {
    try{
        const deletedUser = await User.findByIdAndDelete(id);
        if(deletedUser) { return 0}
        return new Error("Bad request");
    } catch(e){console.log(e)}
};
module.exports.loginUser = async({body}, socket, response) => {
    console.log(body);
    try{
        User.findOne({ username: body.username}, (err, user) => {
            if (err) console.log(err);
            if(!user) {
                console.log("Пользователь не существует");
                return response({isLogged: false, err: "Пользователь не существует"});
            }

            // test a matching password
            user.comparePassword(body.password, (err, isMatch) => {
                if (err) return response({isLogged: false, err: "bad request"});

                if(isMatch){
                    socket.request.session.user = user;
                    console.log(socket.request.session);
                    response({isLogged: true});
                }
                else{
                    console.log("Пароль не верен");
                    response ({isLogged: false, err: "Пароль не верен"});
                }
            });
        });

        return 'Bad request';
    } catch(e){console.log(e)}
}