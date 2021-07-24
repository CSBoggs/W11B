let getaCard = document.getElementById("populateContainer");
getaCard.addEventListener("click", findComic);

function generateID() {
    min = Math.ceil(1);
    max = Math.floor(2493);
    return Math.floor(Math.random() * (max - min) + min);
}

function findComic() {
    let id = generateID();
    // let result = axios.get(`http://xkcd.com/${id}/info.0.json`);
    getImage(result);
    let run = async () => {
        const res = await axios.get(`http://xkcd.com/${id}/info.0.json`);
        console.log(res.data.img);
        console.log("hello");
    };
    
    run();
}

function getImage(response) {
    console.log(response);
    let comic = comic.setAttribute("src", response.data.img[0]);
    document.getElementById("imgContainer").appendChild(comic);
}

let run = async () => {
    const res = await axios.get("http://xkcd.com/614/info.0.json");
    console.log(res.data.img);
    console.log("hello");
};

run();