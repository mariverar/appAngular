import {Router} from 'express';
import routers from './RouterComponent/routerdefaul.js';
const router = Router() 

router.get('/Dashboard',routers.windowDashboard);
router.get('/addIoc',routers.windowAddNewIOC);
router.get('/updateIoc/:id',routers.windowUpdateIOC);
router.post('/addIoc',routers.SaveIOC);
router.put('/updateIoc/:id',routers.updateIOC);
router.delete('/delete/:id',routers.DeletIOC);

//protocol
router.get('/pedirProtocolo',routers.pedirProtocolo)
router.post('/agregarProtocolo',routers.agregarProtocolo)
router.put('/actualizarProtocolo/:id',routers.actualizarProtocolo)

export default router;