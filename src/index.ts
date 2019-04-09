import {GDocument} from "./glider/glider"
import {Base} from './base'
import {Main} from "./main"








function main():void{

    let base = new Base()
    let main = new Main()

}



function about():void{

    let base = new Base()

}


function contact():void{

    let base = new Base()

}







let route = [
    {'' : main},
    {'/about' : about},
    {'/contact' : contact}
]

GDocument.route(route)