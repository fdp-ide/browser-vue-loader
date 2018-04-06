export default class BaseProcessor {
  constructor (loader) {
    this.loader = loader
    this.getRegister = key => (...args) => this.loader.register(key, ...args)
    this.getRegisterDynamic = key => (...args) => this.loader.registerDynamic(key, ...args)
  }

}
