import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	created: { type: Number, default: Date.now() },
	// Relations
	listId: { type: ObjectId, ref: models.list, required: true },
	boardId: { type: ObjectId, ref: models.board, required: true }
});

module.exports = mongoose.model(models.task.name, schema);