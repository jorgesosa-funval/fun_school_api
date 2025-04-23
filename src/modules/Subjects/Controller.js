import {Subjects}from "./Model.js"
    
 /**
  * @description Get all Subjectss
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 export const index = async (req, res, next) => {
   try {
     const subjects = await Subjects.findAll();
     res.status(200).json(subjects);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Get a single Subjects
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const show = async (req, res, next) => {
   try {
     const subject = await Subjects.findByPk(req.params.id);
     if (!subject) {
       throw { status: 404, message: "subject not found" };
     }
     res.status(200).json(subject);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Create a new Subjects
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const store = async (req, res, next) => {
   try {
     const subject = await Subjects.create(req.body, {
       validate: true,
     });
     res.status(201).json({
        status: "ok",
        message: "Subjects created successfully",
     });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Update a Subjects
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const update = async (req, res, next) => {
   try {
     const subject = await SubjectsfindByPk(req.params.id);
     if (!subject) {
       throw { status: 404, message: "Subjects not found" };
     }
     await subject.update(req.body);
     await subject.save();
      res.status(200).json({
        status: "ok",
        message: "Subjects updated successfully"
      });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Delete a Subjects
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 
 export const destroy = async (req, res, next) => {
   try {
     const subject = await Subjects.findByPk(req.params.id);
     if (!subject) {
       throw { status: 404, message: "Subjects not found" };
     }
      await subject.destroy();
      res.status(204).json({
        status: "ok",
        message: "Subjects deleted successfully" 
      });
   } catch (error) {
     next(error);
   }
 };
 
 export default { index, show, store, update, destroy };

