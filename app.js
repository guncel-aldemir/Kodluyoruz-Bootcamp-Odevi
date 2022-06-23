
let groupAssistant =[];
async function getData() {
    let result = await fetch("./data.json")
    .then(response =>response.json())

  function setGroups(groupName,data){
    const assistantTrue = data.filter(item => item.assistant).filter(item=>item.group === groupName && groupAssistant.push(item))
    return assistantTrue;
  }
  console.log(setGroups("OrangeRed",result));
  console.log(setGroups("AliceBlue",result));
  console.log(setGroups("DeepPink",result));
}

getData();