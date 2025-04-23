import {Payments}from "./Model.js"
    
 /**
  * @description Get all Paymentss
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 export const index = async (req, res, next) => {
   try {
     const payments = await Payments.findAll();
     res.status(200).json(payments);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Get a single Payments
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const show = async (req, res, next) => {
   try {
     const payment = await Payments.findByPk(req.params.id);
     if (!payment) {
       throw { status: 404, message: "payment not found" };
     }
     res.status(200).json(payment);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Create a new Payments
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const store = async (req, res, next) => {
   try {
     const payment = await Payments.create(req.body, {
       validate: true,
     });
     res.status(201).json({
        status: "ok",
        message: "Payments created successfully",
     });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Update a Payments
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const update = async (req, res, next) => {
   try {
     const payment = await PaymentsfindByPk(req.params.id);
     if (!payment) {
       throw { status: 404, message: "Payments not found" };
     }
     await payment.update(req.body);
     await payment.save();
      res.status(200).json({
        status: "ok",
        message: "Payments updated successfully"
      });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Delete a Payments
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 
 export const destroy = async (req, res, next) => {
   try {
     const payment = await Payments.findByPk(req.params.id);
     if (!payment) {
       throw { status: 404, message: "Payments not found" };
     }
      await payment.destroy();
      res.status(204).json({
        status: "ok",
        message: "Payments deleted successfully" 
      });
   } catch (error) {
     next(error);
   }
 };
 
 export default { index, show, store, update, destroy };

