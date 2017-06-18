const citationController = require('./controllers/citations');
const resultController = require('./controllers/results');
const classroomController = require('./controllers/classrooms')
const authentication = require('./common/authentication');

const addRoutes = (server) => {

  //Citation routes
  server.get('/mla/citations', citationController.getCitations);
  server.post('mla/citations', authentication, citationController.createCitation);
  server.get('/mla/citations/:id', citationController.getCitation);
  server.put('/mla/citations/:id', authentication, citationController.editCitation);
  server.del('/mla/citations/:id', authentication, citationController.delCitation);

  //Result routes
  server.get('/mla/results', authentication, resultController.getResults);
  server.post('/mla/results', resultController.createResult);
  server.get('/mla/results/classroom/:classroom', resultController.getClassroomResults);
  server.get('/mla/results/id/:id', authentication, resultController.getResult);

  //Classroom routes
  server.get('/mla/classrooms', classroomController.getClassrooms);
  server.get('/mla/classrooms/:id', classroomController.getClassroom);
  server.post('/mla/classrooms', authentication, classroomController.createClassroom);
  server.del('mla/classrooms/:id', authentication, classroomController.delClassroom);
}

module.exports = {addRoutes};
