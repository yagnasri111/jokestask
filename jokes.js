const url = 'https://jokes-always.p.rapidapi.com/common';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '93a8b99422msh281ecb06bb09a96p1a4399jsn66a9a0b7683a',
		'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
	}
};


let div = document.createElement("div");
async function jokefun(url,options){
  try {
    const response = await fetch(url, options);
    const result = await response.json();
      for(let key in result){
        let res = result[key];
        for(let i=0;i<res.length;i++){
          if("?"==res[i]){
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            p1.innerText = res.slice(0,i);
            p2.innerText = res.slice(i+1,res.length-1);
            p2.className = "ans";
            div.append(p1,p2);
          }
        }
      }addData();
  } catch (error) {
    console.error(error);
  }
}
jokefun(url,options)

function addData(){
  document.body.append(div);
}