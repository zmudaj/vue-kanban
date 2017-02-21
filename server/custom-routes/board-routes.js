let Lists = require('../models/list')
let Tasks = require('../models/task')

export default {
  boardLists: {
    path: '/boards/:id/lists',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Board lists'
      Lists.find({boardId: req.params.id})
        .then(lists => {
          res.send(handleResponse(action, lists))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  boardTasks: {
    path: '/boards/:id/tasks',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Board tasks'
      Tasks.find({boardId: req.params.id})
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