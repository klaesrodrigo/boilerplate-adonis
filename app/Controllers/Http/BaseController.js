'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with bases
 */
class BaseController {

  constructor( Model, message){
    this.Model = Model
    this.message = message
  } 

  /**
   * Show a list of all bases.
   * GET bases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {    
    try{
      const resp = await this.Model.all()
      if(!resp){
          return response.status(404).json(this.message.NOT_FOUND)
      }
      return response.status(200).json(resp)
    } catch(error){
        console.error(error)
        return response.status(500).json(this.message.SERVER_ERROR_GET, error)
    }
  }

  /**
   * Create/save a new base.
   * POST bases
   *
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try{
      const resp = await this.Model.create(request.post())
      return response.status(201).json(resp)
    } catch(error){
        console.error(error)
        return response.status(500).json(this.message.SERVER_ERROR_CREATE, error)
    }
  }

  /**
   * Display a single base.
   * GET bases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params, request, response }) {
    try{
      const resp = await this.Modal.find(params.id)
      if(!resp){
          return response.status(404).json(this.message.NOT_FOUND)
      }
      return response.status(200).json(resp)
    } catch(error){
        console.error(error)
        return response.status(500).json(this.message.SERVER_ERROR_GET)
    }
  }

  /**
   * Update base details.
   * PUT or PATCH bases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try{
      const data = await this.Model.find(params.id)
      data.merge(request.post())
      await data.save()
      return response.status(201).json(data)
    } catch(error){
        console.error(error)
        return response.status(500).json(this.message.SERVER_ERROR_UPDATE)
    }
  }

  /**
   * Delete a base with id.
   * DELETE bases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try{
      const data = await this.Model.find(params.id)
      await data.delete()
      return response.status(204).json()
    } catch(error){
        console.error(error)
        return response.status(500).json(this.message.SERVER_ERROR_DELETE)
    }
  }
}

module.exports = BaseController
