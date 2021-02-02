import { Router } from 'express'

import AdminController from './controllers/AdminController'
import ApplyController from './controllers/ApplyController'
import AuthController from './controllers/AuthController'
import ClassesController from './controllers/ClassesController'


const route = Router()

route.post('/applies', ApplyController.store)
route.get('/applies', ApplyController.index)

route.get('/apply/:id', ApplyController.show)
route.post('/apply/:id', ApplyController.update)
route.delete('/apply/:id', ApplyController.delete)

route.get('/classes', ClassesController.index)
route.post('/classes', ClassesController.store)

route.post('/admin/new-admin', AdminController.store)

route.post('/admin/sign-in', AuthController.auth)

export default route