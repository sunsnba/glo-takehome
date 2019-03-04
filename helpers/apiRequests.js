var request = require("request");
var config = require("../../key.config");

module.exports = {
  getAccessToken: function(callback) {
    request.post(
      {
        url: config.apiUrl + "oauth/token",
        form: {
          client_id: config.apiClientCID,
          client_secret: config.apiClientSecret,
          grant_type: "client_credentials"
        }
      },
      function(e, r, response) {
        if (e) return callback(e);
        if (r.statusCode !== 200) return callback(response);

        response = JSON.parse(response);
        console.log(response.access_token);
        return callback(null, "Bearer " + response.access_token);
      }
    );
  },

  getTeacher: function(teacherId, accessToken, callback) {
    request.get(
      {
        url: config.apiUrl + "teachers/" + teacherId,
        headers: {
          Authorization: accessToken
        }
      },
      function(e, r, response) {
        if (e) return callback(e);
        if (r.statusCode !== 200) return callback(response);

        return callback(null, JSON.parse(response));
      }
    );
  },

  getTeacherClasses: function(teacherId, accessToken, callback) {
    request.get(
      {
        url:
          config.apiUrl +
          "classes?include=video,level,teachers,style,tags&limit=12&filters=teachers:" +
          teacherId,
        json: true,
        headers: {
          Authorization: accessToken
        }
      },
      function(e, r, response) {
        if (e) return callback(e);
        if (r.statusCode !== 200) return callback(response);

        return callback(null, response);
      }
    );
  }
};
