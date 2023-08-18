// commonQuery.js

class CommonQuery {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const createdItem = await this.model.create(data);
      return createdItem;
    } catch (error) {
      throw error;
    }
  }

  async getAllData() {
    try {
      const items = await this.model.find();
      return items;
    } catch (error) {
      throw error;
    }
  }
  async getData(id) {
    try {
      const items = await this.model.findById(id);
      return items;
    } catch (error) {
      throw error;
    }
  }
  async deletedData(id) {
    try {
      const items = await this.model.findByIdAndDelete(id);
      return items;
    } catch (error) {
      throw error;
    }
  }
  async updatedData(id, data) {
    try {
      const items = await this.model.findByIdAndUpdate(id, data);
      return items;
    } catch (error) {
      throw error;
    }
  }
  // Add update and delete methods here
}

module.exports = CommonQuery;
