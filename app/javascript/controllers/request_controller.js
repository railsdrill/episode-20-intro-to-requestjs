import { Controller } from "@hotwired/stimulus"
import { get, post, put, patch, destroy } from '@rails/request.js'
export default class extends Controller {


  async destroyData(e){
    var id = e.target.id
    const response = await destroy("/articles/" + id)
    if (response) {
      console.log("successful delete")
    }
  }

  async updateData(e){
    var id = e.target.id
    const response = await patch(window.location.href + "/" + id, {body: JSON.stringify({title: "Title was been changed"})})  
    if (response.ok) {
      console.log(response.body)
      
    }  
  }
  async createData(){
    const response = await post(window.location.href, {body:JSON.stringify({title: "This is from the console", content: "Some random information"})})
    if (response.ok) {
      console.log("successful post")
      
    }
  }
  async getIndexData(){
    const response = await get(window.location.href + ".json")
    if (response.ok){
      const body = JSON.parse(await response.text)
      console.log(body)
    }
  }

  initialize(){
// this.getIndexData()
  }
  connect() {
  }
}
