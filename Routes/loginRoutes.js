const mongoose = require('mongoose');
const Login = mongoose.model('Login');

module.exports = (app) => {

    app.get(`/api/login`, async (req, res) => {
        let login = await Login.find();
        return res.status(200).send(login);
    })

    app.post(`/api/login`, async (req, res) => {

        // Login.find({userName:res.userName})
        //     .then(result => {
        //         console.log(result + "what the coming")
        //     })


        // console.log("maah")
        let login = await Login.create(req.body);
        return res.status(201).send({
            error: false,
            login
        })
    })


    app.put(`/api/login/:id`, async (req, res) => {
        const {id} = req.params;

        let login = await Login.findByIdAndUpdate(id, req.body);

        return res.status(202).send({
            error: false,
            login
        })

    });

    app.delete(`/api/login/:id`, async (req, res) => {
        const {id} = req.params;

        let login = await Login.findByIdAndDelete(id);

        return res.status(202).send({
            error: false,
            login
        })

    })

}