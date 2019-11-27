const CustomException = use('App/Exceptions/CustomException')

class BaseModel {

  constructor( Model, message){
    this.Model = Model
    this.message = message
  } 

  async index () {
      const results = await this.Model.query().where({is_active: true})
      return results || []
  }

  async store (data) {
      const result = await this.Model.create(data)
      return result
  }

  async show (where) {
      const result = await this.Model.findBy({...where, is_active: true})
      if(!result){
        throw new CustomException(...this.message.NOT_FOUND)
      }
      return result
  }

  async update (id, data) {
      const resp = await this.Model.show({id})
      if(!resp){
        throw new CustomException(...this.message.NOT_FOUND)
      }
      resp.merge(data)
      const result = await resp.save()
      return result
  }

  async destroy (id) {
      const data = await this.Model.show(id)
      if(!data){
        throw new CustomException(...this.message.NOT_FOUND)
      }
      await data.delete()
      return data
  }
}

module.exports = BaseModel
