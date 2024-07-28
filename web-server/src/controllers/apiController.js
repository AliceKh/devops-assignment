const request = require('request');
require('dotenv').config();

const getAllUserBuys = async (res) => {
    request(`${process.env.API_URL}/api/getAllUserBuys`, {},
        function (error, response) {
            if (error) {
                res.status(500).send('Internal Server Error');
            } else if (response.statusCode == 200) {
                res.status(200).send(response.body);
            } else {
                res.status(response.statusCode).send(response.body);
            }
        });
};

module.exports = {
    getAllUserBuys,
};
