const baseURL = 'http://localhost:4000'

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const colorBtn = document.getElementById("colorButton")
const getMotivationsBtn = document.getElementById('getMotivations')
const motivationBin = document.getElementById('displayMotivations')
const addForm = document.getElementById('addForm')
const addInput = document.getElementById('addInput')

//////////////////////////////////////////////////////////////////////////////////////

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then (res => {
            const data = res.data
            alert(data)
        })
};

const getColor = () => {
    axios.get("http://localhost:4000/api/color/")
        .then (res => {
            const data = res.data
            alert(data)
        })
};

const getMotivations = () => {
    axios.get(`${baseURL}/api/motivations`)
    .then((res) => {
        console.log(res.data)
        const weapons = res.data
        for (let i = 0;i < getMotivations.length; i++){
            let newMotivation = document.createElement('li')
                newMotivation.textContent = motivations[i]
                motivationBin.appendChild(newMotivation)
        }
    })
    .catch((err) => {
        console.log(err)
    })
};

const addNewItem = (event) => {
    event.preventDefault()

    let bodyObj = {
        item: addInput.value
    }

    axios.post(`${baseURL}/api/addMotivation`, bodyObj)
     .then((res) => {
          console.log(res.data)
      })
     .catch((err) => {
        console.log(err)
     })
}



/////////////////////////////////////////////////////////////////////////////////////////

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
colorBtn.addEventListener('click', getColor)
getMotivationsBtn.addEventListener('click', getMotivations)
addForm.addEventListener('submit', addNewItem)