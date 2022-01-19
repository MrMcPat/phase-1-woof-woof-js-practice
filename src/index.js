function fetchBooks () {
    return fetch("http://localhost:3000/pups")
    .then((resp) => resp.json())
    .then((data) => {
        const dogBar = document.getElementById("dog-bar");
        const dogInfo = document.getElementById("dog-info");
        const dogImg = document.createElement("img");
        const doggoName = document.createElement("h2");
        const dogButton = document.createElement("button");

        data.forEach(dog => {
            let dogName = document.createElement("span");
            dogName.textContent = dog.name;
            dogBar.appendChild(dogName);
        });
        dogBar.addEventListener("click" , event => {
            console.log(event.target.innerText);
            data.forEach(dog => {
                if(event.target.innerText === dog.name) {
                    dogImg.src = dog.image;
                    doggoName.textContent = dog.name;
                    dog.isGoodDog === true ? dogButton.textContent = "Good Dog" : dogButton.textContent = "Bad Dog";
                    dogInfo.append(dogImg, doggoName, dogButton);
                }
            })
        })
    });
}



document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();
  });
  