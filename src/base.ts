import {GHTMLControl} from "./glider/glider"
import "./base.css"
import {Nav} from "./nav"






let baseView = `
approot
  div id=nav
  div id=content
  
`




export class Base extends GHTMLControl {
    

    nav:GHTMLControl

    constructor() {
        super(baseView)
        let nav = new Nav()
    }

}
