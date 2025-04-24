import { Teachers } from "./Model.js"

/**
 * @description Get all Teacherss
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const index = async (req, res, next) => {
  try {
    const teachers = await Teachers.findAll({
      include: [
        {
          association: "user",
          attributes: {
            exclude: ["password"],
          },
        }, 
        'courses',
        'subjects',
      ], 
       
    });
    res.status(200).json(teachers);
  } catch (error) {
    next(error);
  }
};

/**
 * @description Get a single Teachers
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const show = async (req, res, next) => {
  try {
    const teacher = await Teachers.findByPk(req.params.id, {
      include: [
        {
          association: "user",
          attributes: {
            exclude: ["password"],
          },
        }, 
        'courses',
        'subjects',
      ], 
    });
    if (!teacher) {
      throw { status: 404, message: "teacher not found" };
    }
    res.status(200).json(teacher);
  } catch (error) {
    next(error);
  }
};

/**
 * @description Create a new Teachers
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const store = async (req, res, next) => {
  try {
    const teacher = await Teachers.create(req.body, {
      validate: true,
    });
    res.status(201).json({
      status: "ok",
      message: "Teachers created successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description Update a Teachers
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const update = async (req, res, next) => {
  try {
    const teacher = await TeachersfindByPk(req.params.id);
    if (!teacher) {
      throw { status: 404, message: "Teachers not found" };
    }
    await teacher.update(req.body);
    await teacher.save();
    res.status(200).json({
      status: "ok",
      message: "Teachers updated successfully"
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description Delete a Teachers
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */

export const destroy = async (req, res, next) => {
  try {
    const teacher = await Teachers.findByPk(req.params.id);
    if (!teacher) {
      throw { status: 404, message: "Teachers not found" };
    }
    await teacher.destroy();
    res.status(204).json({
      status: "ok",
      message: "Teachers deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

export default { index, show, store, update, destroy };

