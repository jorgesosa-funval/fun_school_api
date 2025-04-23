import {Levels}from "./Model.js"
    
 /**
  * @description Get all Levelss
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 export const index = async (req, res, next) => {
   try {
     const levels = await Levels.findAll();
     res.status(200).json(levels);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Get a single Levels
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const show = async (req, res, next) => {
   try {
     const level = await Levels.findByPk(req.params.id);
     if (!level) {
       throw { status: 404, message: "level not found" };
     }
     res.status(200).json(level);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Create a new Levels
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const store = async (req, res, next) => {
   try {
     const level = await Levels.create(req.body, {
       validate: true,
     });
     res.status(201).json({
        status: "ok",
        message: "Levels created successfully",
     });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Update a Levels
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const update = async (req, res, next) => {
   try {
     const level = await LevelsfindByPk(req.params.id);
     if (!level) {
       throw { status: 404, message: "Levels not found" };
     }
     await level.update(req.body);
     await level.save();
      res.status(200).json({
        status: "ok",
        message: "Levels updated successfully"
      });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Delete a Levels
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 
 export const destroy = async (req, res, next) => {
   try {
     const level = await Levels.findByPk(req.params.id);
     if (!level) {
       throw { status: 404, message: "Levels not found" };
     }
      await level.destroy();
      res.status(204).json({
        status: "ok",
        message: "Levels deleted successfully" 
      });
   } catch (error) {
     next(error);
   }
 };
 
 export default { index, show, store, update, destroy };

