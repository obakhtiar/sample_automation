import fs from "fs";
import path from "path";

class ReadWriteHelper {
  async readFile(fileName: string, key: string) {
    const data = fs.readFileSync(fileName);
    const parseData = JSON.parse(data.toString());
    return parseData;
  }

  async writeFile(fileName: string, key: string, value: string) {
    let data = await this.readFile(fileName, key);
    data[key] = value;
    fs.writeFile(fileName, JSON.stringify(data), function writeJSON(err) {
      if (err) return console.log(err);
      console.log(JSON.stringify(data));
      console.log("writing to " + fileName);
    });
  }
}
export default new ReadWriteHelper();
