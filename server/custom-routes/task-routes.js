let Comments = require('../models/comment')

export default {
  taskComments: {
    path: '/tasks/:id/comments',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Task Comments'
      Comments.find({taskId: req.params.id})
        .then(comments => {
          res.send(handleResponse(action, comments))
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