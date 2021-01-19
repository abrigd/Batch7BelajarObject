
import Header from '../component/header';
import Body from '../component/body';
import Footer from '../component/footer';


let header = new Header("Juaracoding");
let body = new Body();
let footer = new Footer();
document.getElementById("header").innerHTML=header.draw();
document.getElementById("body").innerHTML=body.draw();
document.getElementById("footer").innerHTML=footer.draw();
