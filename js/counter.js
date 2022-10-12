// API invoke function - DynamoDB
console.log("Hey im working over here");
let counter = document.querySelector(".counter-number");

async function updateCounter() {
  let response = await fetch(
    "https://0vkjldnsv6.execute-api.us-east-1.amazonaws.com/dev/restapi"
  );
  // let data = await response.json();
  let data = 1;
  counter.innerHTML = `You are the ${data}. visitor to my Cloud Resume Challenge site`;
}

updateCounter();
