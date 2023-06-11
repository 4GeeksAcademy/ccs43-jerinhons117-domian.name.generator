/* eslint-disable */
/*import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

/*window.onload = function() {
  //write your code here

  console.log("Hello Rigo from the console!");
};*/

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const ext = [".com", ".net", ".ve", ".go"];

function domainName(pronouns, adjetives, nouns, exts) {
  for (let pronoun of pronouns) {
    for (let adj of adjetives) {
      for (let noun of nouns) {
        for (let ext of exts) {
          console.log(pronoun + adj + noun + ext);
        }
      }
    }
  }
}

domainName(pronoun, adj, noun, ext);
