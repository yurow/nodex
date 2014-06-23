'use strict'
var crypto = require('crypto');

/**
 * aes�ӽ���
 */
module.exports = (function(){
	var self = this;
	var init = function(){
		var config = {};
		this.prepare = function(options){
			if(options && options != 'test'){
				if(!options.algorithm) throw new Exception('invited algorithm');
				if(!options.secretKey) throw new Exception('invited secretKey');
				if(!options.iv) options.iv = '';
				if(!options.encoding) options.encoding = 'utf8';
				if(!options.crypto) options.crypto = 'base64';
				config = options;
			}else{
				config.algorithm = 'aes-256-ecb';
				config.secretKey = 'testtesttesttesttesttesttesttest';
				config.iv = '';
				config.encoding = 'utf8';
				config.crypto = 'base64';
			}
		}
		this.encode = function(data){
			var cipher = crypto.createCipheriv(config.algorithm, 
					config.secretKey,config.iv);
			return cipher.update(data, config.encoding, config.crypto)
					+ cipher.final(config.crypto);
		};
		this.decode = function(data){
			var deCipher = crypto.createDecipheriv(config.algorithm, 
					config.secretKey,config.iv);
			return deCipher.update(data, config.crypto, config.encoding) 
					+ cipher.final(config.encoding);
		};
	}
	var instance = new init();
	var aes = function(options){
		if(options){
			instance.prepare(options);
		}
		return instance;
	};
	return aes;
})();
