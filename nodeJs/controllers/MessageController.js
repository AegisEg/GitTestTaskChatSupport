const axios = require('axios').default;
module.exports = {
    //Send new Message to Laravel api
    sendMesssage: async(message, dialogId, token) => {
        axios.post(`${process.env.LARAVEL_API_URL}dialog/sendMessage`, {
                message,
                dialogId
            }, {
                headers: {
                    'Authorization': "Bearer " + token
                }
            }).then((res) => {
                console.log("Success");
            })
            .catch((e) => console.log(e))
    }
};