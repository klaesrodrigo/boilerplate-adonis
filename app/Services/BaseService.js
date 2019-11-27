const Message = use('App/Exceptions/const')
const Model = use('App/Models/BaseModel')
class BaseService {

  constructor(model, name){
    this.message = Message(name)
    this.Model = new Model(model, name)
  } 

  async index () {
      const results = await this.Model.index()
      return results
  }

  async store (data) {
      const result = await this.Model.store(data)
      return result
  }

  async show (where) {
      const result = await this.Model.show(where)
      return result
  }

  async update ({id, ...data}) {
      const result = await this.Model.update(id, data)
      return result
  }

  async destroy (id) {
      const result = await this.Model.destroy(id)
      return result
  }
}

module.exports = BaseService
