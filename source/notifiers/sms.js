var transport = require('../transport');

module.exports = function sms (options, failure, callback) {
	var text = JSON.stringify(failure);
	var from = options.from;
	var to = options.to;

	var message = {
		body: text,
		from: from,
		to: to
	};

	console.log('sending twillo notification');
//	transport.twilio.messages.create(message, callback);
	//transport.twilio.sendMessage(message, callback);
};
