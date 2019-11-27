const CustomException = use('App/Exceptions/CustomException')
const Message = use('App/Exceptions/const')
const Service = use('App/Services/BaseService')
class BaseService {

  constructor(Service, name){
    this.message = Message(name)
    this.Service = new Service(Model, name)
  } 

  async index () {
      const results = await this.Service.index()
      return results
  }

  async store (data) {
      const result = await this.Service.store(data)
      return result
  }

  async show (where) {
      const result = await this.Service.show(where)
      return result
  }

  async update ({id, ...data}) {
      const result = await this.Service.update(id, data)
      return result
  }

  async destroy (id) {
      const result = await this.Service.destroy(id)
      return result
  }
}

module.exports = BaseService
