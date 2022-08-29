import request from "supertest";
import * as xraydata from "../resources/xraydata.json";
import ReadWriteHelper from "./read_write_helper";
class Xrayhelper {
  async postRequest(filename, key) {
    let response = await request(xraydata.baseurl)
      .post(xraydata.url)
      .set("Content-Type", "application/json")
      .send({
        client_id: xraydata.client_id,
        client_secret: xraydata.client_secret,
      });
    const value = JSON.stringify(response.body);
    await ReadWriteHelper.writeFile(filename, "token", value);
  }
}
export default new Xrayhelper();
