module.exports = {

  friendlyName: 'Generate default data object',
  description: 'Generate default data object',

  inputs: {
    req: {
      type: 'ref',
      description: 'The current incoming request (req).',
      required: true
    }
  },
  exits: {
    success: {}
  },
  fn: async function (inputs, exits) {
    sails.log.info("=== helper/get-default-data => START ===========");
    //let listClasses = await ClassService.find({ school: inputs.req.me.school, courseSession: inputs.req.session.courseSessionActive, status: sails.config.custom.STATUS.ACTIVE });
    //let listCourseSession = await CourseSessionService.find({ school: inputs.req.me.school, status : sails.config.custom.STATUS.ACTIVE });
    // let objList = {};
    // for (let item of listCourseSession) {
    //   objList[item.id] = item;
    // }
    // let currCourseSession = objList[inputs.req.session.courseSessionActive];
    // let classActive = "";
    // let classActiveTitle = "";
    // if (inputs.req.params.classActive) {
    //   classActive = inputs.req.params.classActive;
    //   let classActiveObj = await Class.findOne({ id: inputs.req.params.classActive });
    //   classActiveTitle = classActiveObj.title;
    // }
    let _default = await {
      userActive: inputs.req.me,
      //classActive: classActive,
      //classActiveTitle: classActiveTitle,
      moduleActive: inputs.req.options,
     // listClasses: listClasses,
      //listCourseSession: listCourseSession,
      //currCourseSession: currCourseSession,
      //moment: moment,
      url: inputs.req.path
    };
    _default = await _.extend(sails.config.custom, _default);

    return exits.success(_default);
  }
};
