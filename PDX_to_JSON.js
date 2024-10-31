const fs = require('fs');

// CONVERTS PDX OBJECTS TO JSON
// FILTERS COMMENTS, PLEASE REPORT AN ERROR IF CAUGHT
// PLEASE PASTE INTO STR VAR 

let str = `

`;
const strToObj = (str) => {
  str = str.trim()
    .replaceAll("\t", "")
    .replaceAll("\n\n", "\n")
    .split("\n");

  let obj = {};
  let nestlingDepth = [];
  str.forEach(item => {
    if (!item) return;
    item = item.split("#")[0];
    

    let [key, value] = item.split("=");
    if (!(key.trim().length > 0)) return;
    if (typeof (value) == "undefined") value = "";

    let current = obj;
    for (let i = 0; i < nestlingDepth.length - 1; i++) {
      const key = nestlingDepth[i];
      current = current[key];
    }
    if (item.includes("{")) {
      key = item.replace("=", "").split("{")[0].trim();
      const temp = {};
      if (item.includes("}")) {
        let tempVal = value.replaceAll(/\{|\}/gi, "").trim();
        if (tempVal) {
          tempVal.split(" ").forEach(arg => {
            temp[arg.trim()] = "";
          })
        }
      };
      const target = nestlingDepth.length ? current[nestlingDepth[nestlingDepth.length - 1]] : current;
      if(typeof(target[key.trim()]) !== "undefined"){   
        target[key.trim()] = [target[key.trim()], temp];
      }else{
        target[key.trim()] = temp;
      }

      if (Object.keys(temp).length) return;
      nestlingDepth.push(key);
      return;
    };
    if (item.includes("}")) {
      nestlingDepth.pop();
      return;
    }
    if (nestlingDepth.length > 0) {
      let target = current[nestlingDepth[nestlingDepth.length - 1]];
      if(target.constructor == Array){
        console.log("skibidi");
        
        target[target.length - 1][key.trim()] = value.trim();
        return
      } 
      current[nestlingDepth[nestlingDepth.length - 1]][key.trim()] = value.trim();
      return;
    }

    obj[key.trim()] = value.trim();
  });
  return obj;
}
fs.writeFileSync("./result.json", JSON.stringify(strToObj(str)));
