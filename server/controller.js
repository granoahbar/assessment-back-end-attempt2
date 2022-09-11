module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
,
    getFortune: (req, res) => {
        const fortunes = ["You are going to be rich", "You are going through some important changes right now", "You will some day suck a little less then you do now at coding", "You will soon meet someone important", "Your poops are going to hurt after eating this chinese"]
    
    let randomIndex = Math.floor(Math.random() * fortunes.length)
    let randomFortune = fortunes[randomIndex]

    res.status(200).send(randomFortune)
    }
,
    getColor: (req, res) => {
        const colors = ["blue", "yellow", "greem", "red", "orange"]

    let randomIndex = Math.floor(Math.random() * colors.length)
    let randomColor = colors[randomIndex]

    res.status(200).send(randomColor)
    }
,
    postMotivation: (req,res) => {
        let motivation = [""]
    }
}

