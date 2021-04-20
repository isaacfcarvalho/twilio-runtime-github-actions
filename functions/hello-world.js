exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello Brazil!"
    }

    callback(null, result);
  };
