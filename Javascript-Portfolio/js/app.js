import { leftDiv } from "./info.js";
import { homeDiv } from "./home.js";
import { rightDiv } from "./image.js";
import { project } from "./card.js";

const data1 = {
    title: "Darel <span>Code</span>",
    para1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    contactBtn:"Contact me",
    img: "darelgwapo.jpg",
}

const data2 = {
    title2:"PROJECT COMPLTE",
    img1:"java.png",
    img2:"python.png",
    img3:"website.png",
    para2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    learnBtn:"Learn More"
}

const { title, para1, contactBtn, img } = data1
const { title2, img1, img2, img3, para2, learnBtn } = data2

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

sectionOne.append(leftDiv(title, para1, contactBtn))
sectionOne.append(rightDiv(img))
sectionOne.append(homeDiv(para1, contactBtn))
sectionTwo.append(project(title2, img1, img2, img3, para2, learnBtn))