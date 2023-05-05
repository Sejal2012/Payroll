// import {instance} from '../index.js';
// import { createRequire } from 'module';

import Razorpay from 'razorpay';
import crypto from 'crypto';
export const order = async(req,res)=>{
    let instance = new Razorpay({key_id:'rzp_test_cHYcYG6up0Rc0P' ,key_secret:'DAR1Y7SBY6Vamr1iQXzQdxEc'});
   
    const options ={
        amount : req.body.amount*100,
        currency :"INR",
    };  console.log(req.body.amount);

    instance.orders.create(options,function(err,order){
        if(err){
            return res.send({code:500, message:'server Err'})
        }
        return res.send({code: 200 , message :'order created',data: order});
      });
}
export const varify= (req,res)=>{
        let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
         var expectedSignature = crypto.createHmac('sha256', 'DAR1Y7SBY6Vamr1iQXzQdxEc')
                                         .update(body.toString())
                                         .digest('hex');
         var response = {"signatureIsValid":"false"}
         if(expectedSignature === req.body.response.razorpay_signature){
          response={"signatureIsValid":"true"}
          res.send({code:200 , message: 'sign valid'})
       }else{
             res.send({code:500 , message: 'sign Invalid'})
       }
       
}