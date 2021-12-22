import http from "../util/http-util";

class WebService {
  getAll() {
    return http.get("");
  }

  get(id) {
    return http.get(`${id}`);
  }

  create(data) {
    return http.post("", data);
  }

}

export default new WebService();