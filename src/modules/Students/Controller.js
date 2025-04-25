import { Students } from "./Model.js"

/**
 * @description Get all Studentss
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const index = async (req, res, next) => {

  try {
    const userRelation = {
      association: 'user',
      attributes: {
        exclude: [ 'password' ]
      }
    }
    const students = await Students.findAll({
      include: [
        {
          ...userRelation
        },
        { association: 'courses' },
        {
          association: 'parents',
          include: [
            {
              ...userRelation
            }
          ]
        }
      ]
    });
    res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};

/**
 * @description Get a single Students
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const show = async (req, res, next) => {
  try {
    const student = await Students.findByPk(req.params.id);
    if (!student) {
      throw { status: 404, message: "student not found" };
    }
    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
};

/**
 * @description Create a new Students
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const store = async (req, res, next) => {
  try {
    const student = await Students.create(req.body, {
      validate: true,
    });
    res.status(201).json({
      status: "ok",
      message: "Students created successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description Update a Students
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const update = async (req, res, next) => {
  try {
    const student = await StudentsfindByPk(req.params.id);
    if (!student) {
      throw { status: 404, message: "Students not found" };
    }
    await student.update(req.body);
    await student.save();
    res.status(200).json({
      status: "ok",
      message: "Students updated successfully"
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description Delete a Students
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */

export const destroy = async (req, res, next) => {
  try {
    const student = await Students.findByPk(req.params.id);
    if (!student) {
      throw { status: 404, message: "Students not found" };
    }
    await student.destroy();
    res.status(204).json({
      status: "ok",
      message: "Students deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

export default { index, show, store, update, destroy };

