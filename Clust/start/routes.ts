/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(()=>{
  Route.get('/', 'InteractionsController.get')
  Route.get('/:id', 'InteractionsController.getById')
  Route.post('/', 'InteractionsController.create')
  Route.put('/', 'InteractionsController.update')
  Route.delete('/:id', 'InteractionsController.destroy')
}).prefix('interaction')

Route.group(()=>{
  Route.get('/', 'AnswersController.get')
  Route.get('/:id', 'AnswersController.getById')
  Route.post('/', 'AnswersController.create')
  Route.put('/', 'AnswersController.update')
  Route.delete('/:id', 'AnswersController.destroy')
}).prefix('answer')

Route.group(()=>{
  Route.get('/', 'BlockListsController.get')
  Route.get('/:id', 'BlockListsController.getById')
  Route.post('/', 'BlockListsController.create')
  Route.put('/', 'BlockListsController.update')
  Route.delete('/:id', 'BlockListsController.destroy')
}).prefix('blockList')

Route.group(()=>{
  Route.get('/', 'SpotsController.get')
  Route.get('/:id', 'SpotsController.getById')
  Route.post('/', 'SpotsController.create')
  Route.put('/', 'SpotsController.update')
  Route.delete('/:id', 'SpotsController.destroy')
}).prefix('spot')

Route.group(()=>{
  Route.get('/', 'UsersController.get')
  Route.get('/:id', 'UsersController.getById')
  Route.post('/', 'UsersController.create')
  Route.post('/login', 'UsersController.login')
  Route.post('/logout', 'UsersController.logout')
  Route.put('/', 'UsersController.update')
  Route.delete('/:id', 'UsersController.destroy')
}).prefix('user')

Route.group(()=>{
Route.get('/', 'CategoriesController.get')
Route.get('/:id', 'CategoriesController.getById')
Route.post('/', 'CategoriesController.create')
Route.put('/', 'CategoriesController.update')
Route.delete('/:id', 'CategoriesController.destroy')
}).prefix('category')


Route.group(()=>{
Route.get('/', 'TagsController.get')
Route.get('/:id', 'TagsController.getById')
Route.post('/', 'TagsController.create')
Route.put('/', 'TagsController.update')
Route.delete('/:id', 'TagsController.destroy')
}).prefix('tag')