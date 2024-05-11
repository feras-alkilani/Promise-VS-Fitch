

// USing Promise
let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "articles.json")
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});


// let h1 = document.createElement(`h1`);
//   h1.innerHTML = `This is using Promise`;

//   document.body.appendChild(h1);
//   document.body.appendChild(document.createElement("hr"));

myPromise.then(
  
  function(value) {myDisplayer1(value);},
  function(error) {myDisplayer1(error);}
);


function myDisplayer1(some) {

  let h2 = document.createElement(`h1`);
  h2.innerHTML = `This is using Promise()`;

  document.body.appendChild(h2);
  document.body.appendChild(document.createElement("hr"));


  for ( let i =0 ; i<5 ; i++){

    let div = document.createElement('div');
    div.innerHTML = `
    <h3>Article Title Number ${i+1}</h3>
    <p>Article description Number ${i+1}</p>
    `;
    document.body.appendChild(div);

  }
  
}


// Using Fetch


let file = "articles.json"
fetch (file)

.then(
  function(value) {myDisplayer2(value);},
  function(error) {myDisplayer2(error);}
);


function myDisplayer2(some) {

  let h2 = document.createElement(`h1`);
  h2.innerHTML = `This is using fitch()`;

  document.body.appendChild(h2);
  document.body.appendChild(document.createElement("hr"));


  for ( let i =0 ; i<5 ; i++){

    let div = document.createElement('div');
    div.innerHTML = `
    <h3>Article Title Number ${i+1}</h3>
    <p>Article description Number ${i+1}</p>
    `;
    document.body.appendChild(div);

  }
  
}
