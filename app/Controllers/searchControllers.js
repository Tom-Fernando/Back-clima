const climaModel = require('../models/searchModel')

module.exports = {

    historico(request,response){
        try{
 
            climaModel.historico(request).then(result =>{
                return response.json(result)
            })

        }catch (error){
            return response.status(400).json(error)
        }
    },
    gravar(request,response){
        try{
            console.log(`Controler`)
           climaModel.novoregistro(request).then(result =>{
               return response.json(result)
           })
        }catch (error){
            return response.status(400).json(error)
        }
    }
}