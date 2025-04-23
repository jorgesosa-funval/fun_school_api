import {Courses}from "./Model.js"
    
 /**
  * @description Get all Coursess
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 export const index = async (req, res, next) => {
   try {
     const courses = await Courses.findAll();
     res.status(200).json(courses);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Get a single Courses
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const show = async (req, res, next) => {
   try {
     const course = await Courses.findByPk(req.params.id);
     if (!course) {
       throw { status: 404, message: "course not found" };
     }
     res.status(200).json(course);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Create a new Courses
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const store = async (req, res, next) => {
   try {
     const course = await Courses.create(req.body, {
       validate: true,
     });
     res.status(201).json({
        status: "ok",
        message: "Courses created successfully",
     });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Update a Courses
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const update = async (req, res, next) => {
   try {
     const course = await CoursesfindByPk(req.params.id);
     if (!course) {
       throw { status: 404, message: "Courses not found" };
     }
     await course.update(req.body);
     await course.save();
      res.status(200).json({
        status: "ok",
        message: "Courses updated successfully"
      });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Delete a Courses
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 
 export const destroy = async (req, res, next) => {
   try {
     const course = await Courses.findByPk(req.params.id);
     if (!course) {
       throw { status: 404, message: "Courses not found" };
     }
      await course.destroy();
      res.status(204).json({
        status: "ok",
        message: "Courses deleted successfully" 
      });
   } catch (error) {
     next(error);
   }
 };
 
 export default { index, show, store, update, destroy };

