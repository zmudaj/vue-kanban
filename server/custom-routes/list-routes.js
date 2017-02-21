let Tasks = require('../models/task')

export default {
  listTasks: {
    path: '/lists/:id/tasks',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find List Tasks'
      Tasks.find({listId: req.params.id})
        .then(tasks => {
          res.send(handleResponse(action, tasks))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}


function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }