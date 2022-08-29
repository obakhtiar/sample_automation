import  request from 'supertest'
class Api_helper {
    async  getRequest() {
        let res = await request("https://airportgap.dev-tester.com/api")
            .get("/airports")
        //console.log(res)
    }


}export default new Api_helper();

