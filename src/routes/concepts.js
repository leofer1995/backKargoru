const express = require('express');
const router = express.Router();
const  Concept  = require('../database/models/Concept');

//crear concept
router.post('/', async(req, res) => {

    const {
        origin,
        destiny,
        //weight,
        //type,
        description,
        price,
        //discount,
        quotation_id,
        client_id,
    } = req.body;//obtengo data del body

    try {

        const concept = await Concept.create({
            origin,
            destiny,
            //weight,
            //type,
            description,
            price,
            //discount,
        });// creo concepto

        concept.setQuotation(quotation_id);//relacion concepto cotizacion
        concept.setClient(client_id);//relacion concepto cliente

        res.json({
            msg:'concept created',
            concept,
        });

    }catch(err){

        res.json({
            msg:'error',
            type: err,
        });

    }

});

router.put('/update/:id', async(req, res) => {

    const {id} = req.params;
    const {
        origin,
        destiny,
        //weight,
        //type,
        description,
        price,
        //discount,
    } = req.body;//obtengo data del body

    try{

        const update = await Concept.update({
            origin,
            destiny,
            //weight,
            //type,
            description,
            price,
            //discount,
        },{
            where:{
                id,
            }
        });//actualizo concepto

        res.json({
            msg:'concept update',
            update,
        })

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

        const del = await Concept.findOne({
            where: {
                id
            },                  
        });// obtengo concepto

        await Concept.destroy({
            where:{
                id,
            }
        });//elimino concepto

        res.json({
            msg:'concept delete',
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