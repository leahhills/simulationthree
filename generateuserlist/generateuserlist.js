//Possibilities



var possibleBirthdayDay=[01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

var possibleBirthdayMonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

var possibleBirthdayYear=[2018,2017,2016,2015,2013,1987,1942,1940,1918,1953,1920,1934,1958,1970,1960,1985,1949,1999,2000,2001,2005,2003,1994,1996,1998,1984,1981,1971,1963,1954,1958,1988,1991,1977,1997,1964,1959,1943,1944,1952,1956];

var possibleHobby=["Video Games","Hiking","Fishing","Rafting"];



var possibleHairColor=["Blonde","Brown","Blue","Green","Red","White"];

var possibleEyeColor=["Brown","Green","Blue"];

var possibleNames = ["Joe","Bob","Jon","Mike","Darryl","Adam","Antonio","Alfanzzzzzzo","Taserface","Bart","Brayan","Bruno","Xavier","Jame","Jonas","Ralph","Ron","Matthew","Mason","Jefferey","Jeremy","Jordan","Leroy","Lloyd","Larry","Luke","Kyle","Anthony","Arlen","Arden","Art","George","Arron","Legolas","Arlie","Andre","Sebastian","Mozart","Amos","Jose","Arnaldo","Asa","Tsotsi","Ammad","Aldo","Alec","Allen","Armo","Popo","Poe","Arturo","Arthur","Andrew","Hercules","Zues","Haedes","Alejandro","Augustine","Napolean","Hitler","KimJongUn","Stalin","VladtheImpaler","Josef","Saddam","KimSung","PolPot","Trumpster","Adolf","Vladimir","Georgibush","Kaiser","Nottosmartbum","Hochinmin","Leopold2","Dictator", "Darla","Lyla","Poppy","Jolene","Dolly","Sara","Jane","Allie","Addie","Altha","Alva","Shyla","Silvia","Sue","Sage","Jackie","Jenny","Jona","Sabrina","Sharilyn","Shakira","Sharmaine","Sharla","Sofia","Cindy","Holly","Sadie","Nadia","Lexi","Darci","Nita","Noelle","Naomi","Nala","Natalia","Nora","Rebecca","Ana","Erin","Nicole","Nikki","Natalia","Christy","Christie","Nenita","Nancy","Catherine","Nichelle","Kimber","Kimberly","Rosita","Rosee","Deka","Katrina","Kia","Chiara","Barb","Barbara","Beth","Liz","Kiana","Keisha","Rihanna","Sansa","Kimbra","Kina","Nina","Kimiko","Kimi","Kira","Celine","Debra","Debbie","Kathleen","Kylee","Kara","Tiffany","Talia","Tamera","Tamia","Tasia","Tonya","Toni","Tenisha","Tonyador","Sonya","Torie","Jessie","Jessica","Tennile","Rosalva","Rosaaroo","Roselda","Esmerelda","Ria","Rachel","Rackel","Rikki","Raven","ELEVEN"];

possibleBirthdayYear.length;

function getRandomNumber(min, max) {
  // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  return Math.floor(Math.random() * max) + min;  
}

function getRandomName() {
  let max = possibleNames.length - 1;
  let partA = possibleNames[getRandomNumber(0, max)];
  let partB = possibleNames[getRandomNumber(0, max)];
  return `${partA}${partB}`;
}

function getRandomGender() {
  let genderNum = getRandomNumber(1, 2);
  if(genderNum === 1)
    return 'Male';
  else
    return 'Female';
}

function getRandomHairColor(){
  let max=possibleHairColor.length-1;
  let hairColor=possibleHairColor[getRandomNumber(0,max)];
    return`${hairColor}`;
}

function getRandomEyeColor(){
  let eyeshade=getRandomNumber(1,3);
    if(eyeshade===1)
      return 'Blue';
    else if(eyeshade===2)
      return 'Green';
    else
      return 'Brown';
}

function getRandomHobby(){
  let max = possibleHobby.length-1;
  let funhobby=possibleHobby[getRandomNumber(0,max)];
    return `${funhobby}`;
}

function getRandomMonth(){
  let max = possibleBirthdayMonth.length-1;
  let birthMonth= possibleBirthdayMonth[getRandomNumber(0,max)];
  
    return `${birthMonth}`;
}


function getRandomBirthDay(){
  let max = possibleBirthdayDay.length-1;
  let bDay= possibleBirthdayDay[getRandomNumber(0,max)];
  
    return `${bDay}`;
}

function getRandomBirthYear(){
 let max = 2017;
 let min = 1918;
 let possibleBirthYear= Math.floor(Math.random() * (max-min)) + min;
  
  
    return `${possibleBirthYear}`;
  
}


// Main part of program
let amount = 423;

for(let i = 0; i < amount; i++) {
  let randomFirstName = getRandomName();
  let randomLastName = getRandomName();
  let randomGender = getRandomGender();
  let randomHairColor=getRandomHairColor();
  let randomEyeColor=getRandomEyeColor();
  let randomHobby = getRandomHobby();
  let randomBirthMonth = getRandomMonth();
  let randomBirthDay = getRandomBirthDay();
  let randomBirthYear = getRandomBirthYear();
  let output = `('${randomFirstName}', '${randomLastName}', '${randomGender}','${randomHairColor}','${randomEyeColor}','${randomHobby}','${randomBirthMonth}', ${randomBirthDay}, ${randomBirthYear}),`;
  console.log(output);
}


//('Gabrielle','Xenasidekick','Female','Blonde','Blue','Rafting','May',18,1995),








