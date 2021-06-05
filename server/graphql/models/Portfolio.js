

module.exports = class Portfolio {

  constructor(model) {
    // this._model = Portfolio
    this._model = model;
  }

  getOne(id) {
    return this._model.findById(id);
  }

  getAll() {
    return this._model.find();
  }

  create(obj) {
    return this._model.create(obj)
  }

  update(id, input) {
    return this._model.findOneAndUpdate({_id: id}, input, {new: true})
  }

  delete(id) {
    return this._model.findByIdAndDelete({_id: id});
  }
}