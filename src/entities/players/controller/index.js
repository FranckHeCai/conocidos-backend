import Model from "../model";

import roomController from "entities/rooms/controller"

const Controller = {
  get(conditions) {
    return Model.get(conditions);
  },
  getById(id) {
    return Model.getById(id);
  },
  create(data) {
    return Model.create(data);
  },
  updateById(id, data) {
    return Model.updateById(id, data);
  },
  deleteById(id) {
    return Model.deleteById(id);
  },
  updatePlayer(playerId, data){
    return Model.updatePlayer(playerId, data)
  },
  async getRoom(code){
  console.log(1111111111111)
    const data = await roomController.get({code});
    console.log(2222222222)
    return data;
  }
}

export default Controller;