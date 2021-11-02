const express = require('express');
const router = express.Router();
const Client  = require('../database/models/Client');
const Concept = require('../database/models/Concept');
const Quotation = require('../database/models/Quotation');

//peticion cliente
router.get('/', async(req, res) => {

    try{

        const clients = await Client.findAll({
            include:{
                model:Quotation,
            }
        });//obtengo clientes
    
        res.json(clients);

    }catch(err){
        res.json({
            msg:'error',
            type:err,
        });
    }

});

//peticion cliente por PK
router.get('/:cedula', async(req, res) => {

    const {cedula} = req.params;

    try{

        const clients = await Client.findOne({
            where:{
                cedula
            },
            include:{
                model:Quotation,
            }
        });// obtengo cliente por PK
    
        res.json(clients);

    }catch(err){
        res.json({
            msg:'error',
            type:err,
        });
    }

});


//crear cliente
router.post('/', async(req, res) => {

    const {
        cedula,
        name,
        address,
        phone,
        city,
        country,
        email,
    } = req.body//obtengo data del body

    try{

        const [client, created] = await Client.findOrCreate({
            where:{
                cedula,
            },
            defaults:{
                name,
                address,
                phone,
                city,
                country,
                email,
            }
        });//si ya existe la cedula no lo creo

        if(!created){
            return res.json({created:false});
        }// respuesta si esta creado

        res.json({
            created: true,
            client
        });//respuesta si no esta creado

    }catch(err){
        res.json({
            error: true,
            type: err,
        })
    }
});

//actualizar cliente
router.put('/update/:id', async(req, res) => {
    const {id} = req.params;
    const {       
        cedula,
        name,
        address,
        phone,
        city,
        country,
        email,       
    }= req.body;

    try{

        const update = await Client.update({
            cedula,
            name,
            address,
            phone,
            city,
            country,
            email,
        },{
            where:{
                id
            }
        });// actualizo cliente

        res.json({
            msg:'client update',
            update,
        });

    }catch(err){

        res.json({
            msg:'error',
            type:err,
        });

    }
});

//eliminar cliente
router.delete('/delete/:id', async(req, res) => {

    const {id} = req.params;

    try{

        const del = await Client.findOne({
            where: {
                id
            },                  
        });//cliente a eliminar
        
        await Quotation.destroy({
            where:{
                clientId: del.id,
            }
        });// eliminar cotizaciones relacionadas al cliente

        await Concept.destroy({
            where:{
                clientId: del.id,
            }
        });// eliminar conceptos relacionados con las cotizaciones del cliente

        await Client.destroy({
            where:{
                id,
            }
        });// eliminar cliente
        
        res.json({
            msg:'client delete',
            del,
        });

    }catch(err){
        res.json({
            msg:'error',
            type: err,
        });
    }
});

module.exports = router;