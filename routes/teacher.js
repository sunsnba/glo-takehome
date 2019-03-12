//var fs = require("fs");
var apiRequests = require("../helpers/apiRequests");

module.exports = function(req, res, next) {
  // TODO: Get accessToken, fetch teacher & classes, and pass them to res.render

  apiRequests.getAccessToken(function(err, accessToken) {
    if (err) {
      return res.status(400).send(err);
    }
    apiRequests.getTeacher(req.params.id, accessToken, function(
      err,
      teacherData
    ) {
      if (err) {
        return res.status(400).send(err);
      }
      const data = teacherData.data;
      const teacherPayload = {
        type: data.type,
        id: data.id,
        ...data.attributes
      };

      //console.log(teacherPayload);

      apiRequests.getTeacherClasses(req.params.id, accessToken, function(
        err,
        teacherClassesData
      ) {
        if (err) {
          return res.status(400).send(err);
        }

        const classesPayload = {
          ["Vinyasa Flow"]: [],
          ["Meditation"]: [],
          ["Hatha"]: []
        };

        for (let i = 0; i < teacherClassesData.data.length; i++) {
          const classes = teacherClassesData.data[i];
          if (classes.relationships.style.data.id === "14") {
            classesPayload["Vinyasa Flow"].push({
              type: classes.type,
              id: classes.id,
              ...classes.attributes
            });
          }
          if (classes.relationships.style.data.id === "15") {
            classesPayload["Meditation"].push({
              type: classes.type,
              id: classes.id,
              ...classes.attributes
            });
          }
          if (classes.relationships.style.data.id === "16") {
            classesPayload["Hatha"].push({
              type: classes.type,
              id: classes.id,
              ...classes.attributes
            });
          }
        }
        // console.log("teacher", teacherPayload);
        res.render("teacher", {
          title: "Teachers Page",
          classes: JSON.stringify(classesPayload),
          teacher: JSON.stringify(teacherPayload)
        });
      });
    });
  });
};
//fs.writeFileSync('teacherClassData', teacherClassData);
