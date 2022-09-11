const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)



const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then (res => {
            const data = res.data
            alert(data)
        })
};

fortuneBtn.addEventListener('click', getFortune)



const colorBtn = document.getElementById("colorButton")

const getColor = () => {
    axios.get("http://localhost:4000/api/color/")
        .then (res => {
            const data = res.data
            alert(data)
        })
};

colorBtn.addEventListener('click', getColor)



const motivationBtn = document.getElementById("motivationButton")
const motivationTxt = document.getElementById("motivationTxt")

    const postMotivation = () => {
        axios.post("http://localhost:4000/api/motivation/", {submittedMotivation: motivationTxt.textContent})
        .then (alert("Motivation received!")  
        )
};

motivationBtn.addEventListener('click', postMotivation)