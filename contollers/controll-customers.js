const customer = require('../models/customer')

module.exports={

    obtainAll : async (req, res)=>{
        try{
            const data = await customer.find()
            return res.status(200).json({
                "status": true,
                "data": data
            })
        }catch(err){
            res.status(500).json({
                "status": false,
                "error": err
            })
        }
    },
    findById: async (req, res)=>{
        try {
            const {id} = req.params
            const dataCustomer = await customer.findOne({id: id})
            res.status(200).json({
                "status": true,
                "data": dataCustomer
            })
        } catch (error) {
            res.status(500).json({
                "status": false,
                "error": error
            })
        }

    },
    save: async (req, res)=>{
        try {
            const Customer = new customer(req.body)
            const data = await Customer.save()
            console.log(data)
            res.status(200).json({
                "status": true,
                "data": data
            })
        } catch (error) {
            console.log("error que se produce: " + error)
            res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    erase: async (req, res)=>{
        try {
            const {id} = req.params
            const deletedCustomer = await customer.deleteOne({id:id})
            res.status(200).json({
                "status": true,
                "data": deletedCustomer
            })

        } catch (error) {
            res.status(500).json({
                "status": false,
                "error": error
            })
        }
    }, 
    update: async (req, res)=>{
        try {
            const {id} = req.params
            const customerUpdate = req.body

            const updatedClient = await customer.findByIdAndUpdate(id, customerUpdate)
            res.status(200).json({
                "status": true,
                "data": updatedClient
            })
        } catch (error) {
            res.status(500).json({
                "status": false,
                "error": error
            })
        }
    }



}