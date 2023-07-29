const administrator = require('../models/administrator')


module.exports = {
    obtainAll: async (req, res) => {
        try {
            const administrators = await administrator.find()
            return res.status(200).json({
                "status": true,
                "data": administrators
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    findById: async (req, res) => {
        try {
            const { id } = req.params
            const dataAdministrator = await administrator.findById(id)
            return res.status(200).json({
                "status": true,
                "data": dataAdministrator
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    save: async (req, res) => {
        try {
            const dataAdmin = req.body
            const newAdministrador = new administrator(dataAdmin)
            const dataAdministrator = await newAdministrador.save()
            return res.status(200).json({
                "status": true,
                "data": dataAdministrator
            })

        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    erase: async (req, res) => {
        try {
            const { id } = req.params
            const dataEraseAdministrador = await administrator.findByIdAndDelete(id)
            return res.status(200).json({
                "status": true,
                "data": dataEraseAdministrador
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            const newDataAdministrator = req.body
            const administratorUpdate = await administrator.findByIdAndUpdate(id, newDataAdministrator)
            return res.status(200).json({
                "status": true,
                "data": administratorUpdate
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    }
}