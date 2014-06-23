var nodex = require('./libs');


nodex.config = function(opthions){
	if(!opthions) return;
	if(opthions.aescfg){
		nodex.security.aes(opthions.aescfg);
	}
	return nodex;
}

nodex.config.mongo = function(opthions){
	nodex.db.mongodbbase();
}

module.exports = nodex;