const db = require('../config/mongoose');
const Dashboard = require('../models/dashboard');
const User = require('../models/register');

module.exports.completedtask = function(req, res){
    Dashboard.find({})
    .then(function(data){
        User.findOne({ email: "ankitvis609@gmail.com" })
        .then(function(user){
            if (!user) {
                console.log('User not found');
                return res.render('completedtask', {
                    title: "Dashboard",
                    name: "Guest",
                    dashboard: data
                });
            }

            console.log(`**********user`, user.name);
            return res.render('completedtask', {
                title: "Dashboard",
                name: user.name,
                dashboard: data
            });
        })
        .catch(function(err){
            console.log('Error finding user', err);
            return res.status(500).send('Server Error');
        });
    })
    .catch(function(err){
        console.log('Error finding dashboard data', err);
        return res.status(500).send('Server Error');
    });
};
