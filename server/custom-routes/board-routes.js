let Lists = require('../models/list')
let Tasks = require('../models/task')
let User = require('../models/user')
let Boards = require('../models/board')

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
  },
  inviteToBoard: {
    path: '/boards/:id/invite',
    reqType: 'post',
    method(req, res, next){
      let action = 'Find Board tasks'
      let foundUser
      Users.findOne({userEmail: req.body.email})
        .then( user => {
          foundUser = user
          return Boards.findById(req.params.id)
        })
        .then( board =>{
          board._doc.collaborators.push(foundUser._doc._id)
          return board.save()
        })
        .then(board => {
          res.send(handleResponse(action, board))
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