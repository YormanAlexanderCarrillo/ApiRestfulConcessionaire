const car = require('../models/car')

module.exports ={
    obtainAll: async(req, res)=>{
        try {
            const data  = await car.find()
            res.status(200).json({
                "status": true,
                "data": data
            })
        } catch (error) {
            return res.status(503).json({
                "state": false,
                "error": err
            })
        }
    },
    findById: async (req, res)=>{
        try{
            const {id} = req.params
            const dataCar = await car.findById(id)
            res.status(200).json({
                "status": true,
                "data": dataCar
            })
        }catch(error){
            res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    save: async (req, res)=>{
        try{
            const newCar = new car(req.body)
            const dataCar =  await newCar.save()
            res.status(200).json({
                "status": true,
                "data": dataCar
            })
        }catch(error){
            res.status(500).json({
                "status": false,
                "error": error
            })
        }
    }, 
    erase: async (req, res)=>{
        try {
            const {id} = req.params
            const deletedCar = await car.findByIdAndDelete(id)
            res.status(200).json({
                "status": true,
                "data": deletedCar
            })
        } catch (error) {
            res.status(500).json({
                "status": true,
                "error": error
            })
        }
    }, 
    update: async (req, res)=>{
        try{
            const {id} = req.params
            const updatedData = req.body
            const updatedCar = await car.findByIdAndUpdate(id, updatedData)
            res.status(200).json({
                "status": true,
                "data": updatedCar
            }) 
        }catch(error){
            res.status(500).json({
                "status": false,
                "error": error
            })
        }
    }


}