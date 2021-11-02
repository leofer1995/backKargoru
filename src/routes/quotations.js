const express = require('express');
const router = express.Router();
const Quotation  = require('../database/models/Quotation');
const Concept = require('../database/models/Concept');

//peticion cotizacion por PK
router.get('/:id', async(req, res) => {

    const {id} = req.params;

    try{

        const quotation = await Quotation.findByPk(id,{
            include:{
                model:Concept,
            }
        });// obtengo cotizacion por PK
    
        res.json(quotation);

    }catch(err){

        res.json({
            msg:'error',
            type:err,
        });

    }

});

//crear cotización
router.post('/', async(req, res) => {

    const {
        //date,
        total,
        client_id,
        //seller_id
    } = req.body;//obtengo data del body

    try {

        const quotation = await Quotation.create({
            //date,
            total,
        });//creo cotizacion

        quotation.setClient(client_id);//relacion cotizacion cliente
        //quotation.setSeller(seller_id);

        res.json({
            msg:'quotation created',
            quotation,
        });

    }catch(err){

        res.json({
            msg:'error',
            type: err,
        });

    }

});

//actualizar cotizacion
router.put('/update/:id', async(req, res) => {

    const {id} = req.params;
    const {
        //date,
        total,
    } = req.body; //obtengo data del body y params

    try{

        const update = await Quotation.update({
            //date,
            total,
        },{
            where:{
                id
            }
        });//actualizo cotizacion
    
        res.json({
            msg:'quotation update',
            update,
        });
    
    }catch(err){
    
        res.json({
            msg:'error',
            type:err,
        });
    
    }

});

router.delete('/delete/:id', async(req, res) => {
    const {id} = req.params;

    try{

        const del = await Quotation.findOne({
            where: {
                id
            },                  
        });//obtengo cotizacion a eliminar

        await Concept.destroy({
            where:{
                quotationId: del.id,
            }
        });//elimino conceptos relacionados a cotizacion

        await Quotation.destroy({
            where:{
                id,
            }
        });// elimino cotizacion

        res.json({
            msg:'delete quotation',
            del,
        })

    }catch(err){
        res.json({
            msg:'error',
            type:err,
        });
    }
});
module.exports = router;