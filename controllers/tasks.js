const Task = require('./../models/Task')
const asyncWrapper = require('./../middleware/async')



const getAllTasks = asyncWrapper(async (req, res) => {
    const task = await Task.find({})
    res.status(200).json(task)
}
)
const createTask = asyncWrapper(
    async (req, res) => {
        const newTask = await Task.create(req.body)
        res.status(201).json(newTask)
    }
)

const getTask = asyncWrapper(
    async (req, res, next) => {
        const name = req.params.id
        const getTask = await Task.findOne({ name })

        if(!getTask) {
            const error =  new Error('Not found')
            error.status = 404
            return next(error)
        }
        res.status(201).json({ getTask })

    }

)
const editTask = asyncWrapper(
    async (req, res) => {
        const name = req.params.id
        console.log('name', name)
        const updatedTask = await Task.findOneAndUpdate({ name: name }, req.body, { new: true, runValidators: true })
        console.log('updatedTask', updatedTask)

        if (updatedTask) {
            res.status(201).json({ updatedTask })
        } else {
            res.status(401).json({ msg: 'No Info found!' })
        }
    }
)


const deleteTask = asyncWrapper(
    async (req, res, next) => {
        const name = req.params.id
        const deteleTask = await Task.findOneAndDelete({ name: name })

        if (deteleTask) {
            res.status(200).json({ deteleTask })

        } else {
            const error = new Error('Not found')
            error.status = 404
           return next(error)
            // res.status(404).json({ msg: 'No Task found' })

        }
    }
)

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    editTask,
    deleteTask
}