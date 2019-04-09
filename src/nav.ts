import {GHTMLControl} from "./glider/glider"
import navView from './nav.ghtml'



export class Nav extends GHTMLControl {
    
    constructor() {
        super(navView)
        this.e["aboutLink"].onclick = this.aboutLinkClick.bind(this)
        this.e["contactLink"].onclick = this.contactLinkClick.bind(this)
    }


    aboutLinkClick(e:Event){
        window.location.hash = "/about"
    }

    contactLinkClick(e:Event){
        window.location.hash = "/contact"
    }

}
