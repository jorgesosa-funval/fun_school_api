import {Parents}from "./Model.js"
    
 /**
  * @description Get all Parentss
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 export const index = async (req, res, next) => {
   try {
     const parents = await Parents.findAll();
     res.status(200).json(parents);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Get a single Parents
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const show = async (req, res, next) => {
   try {
     const parent = await Parents.findByPk(req.params.id);
     if (!parent) {
       throw { status: 404, message: "parent not found" };
     }
     res.status(200).json(parent);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Create a new Parents
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const store = async (req, res, next) => {
   try {
     const parent = await Parents.create(req.body, {
       validate: true,
     });
     res.status(201).json({
        status: "ok",
        message: "Parents created successfully",
     });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Update a Parents
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const update = async (req, res, next) => {
   try {
     const parent = await ParentsfindByPk(req.params.id);
     if (!parent) {
       throw { status: 404, message: "Parents not found" };
     }
     await parent.update(req.body);
     await parent.save();
      res.status(200).json({
        status: "ok",
        message: "Parents updated successfully"
      });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Delete a Parents
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 
 export const destroy = async (req, res, next) => {
   try {
     const parent = await Parents.findByPk(req.params.id);
     if (!parent) {
       throw { status: 404, message: "Parents not found" };
     }
      await parent.destroy();
      res.status(204).json({
        status: "ok",
        message: "Parents deleted successfully" 
      });
   } catch (error) {
     next(error);
   }
 };
 
 export default { index, show, store, update, destroy };

