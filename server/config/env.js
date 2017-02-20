// LOCAL DEV VARIABLES
let env = {
	NODE_ENV: 'development',
	PORT: 3000,
	DBPROTOCOL: 'mongodb',
	DBUSERNAME: 'vue-kanban',
	DBPASSWORD: 'vue-kanban',
	DBHOST: 'ds056979.mlab.com:56979',
	DBNAME: 'vue-kanban',
	SERVERNAME: 'dev-server'
}

// MAPS env TO ACTUAL ENVIRONMENT
if (process.env.NODE_ENV == 'development') {
	Object.keys(env).forEach(v => {
		env[v] = process.env[v] || env[v]
	})
} else {
	Object.keys(env).forEach(v => {
		process.env[v] = env[v]
	})
}

// MongoDb Connection String Builder
env.CONNECTIONSTRING = `${env.DBPROTOCOL}://${env.DBUSERNAME}:${env.DBPASSWORD}@${env.DBHOST}/${env.DBNAME}`
process.env.CONNECTIONSTRING = env.CONNECTIONSTRING

exports = env