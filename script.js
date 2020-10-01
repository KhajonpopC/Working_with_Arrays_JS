var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]

// i(iteration) is initial variable. Each time it goes to the loop i is iteration.
// var list = ["Luke", "Bob", "Pam", "Jerry];
// == to compare if true
for(var i=0; i<warriors.length; i++){
  if(warriors[i].damage>=2 && warriors[i].health>=10 && warriors[i].warrior==true ){
  var personEle = document.createElement("div");
  personEle.innerHTML=warriors[i].name;
    if(warriors[i].name.includes("a")){
      personEle.style.color="red";}
    
  document.body.appendChild(personEle);
  }}  

//HTML DOM or JAVA w3 schools.