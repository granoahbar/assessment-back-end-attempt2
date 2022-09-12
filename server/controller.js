const motivations = ['outdoors', 'God']
const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."]
const fortunes = ["You are going to be rich", "You are going through some important changes right now", "You will some day suck a little less then you do now at coding", "You will soon meet someone important", "Your poops are going to hurt after eating this chinese"]
const colors = ["blue", "yellow", "greem", "red", "orange"]

///////////////////////////////////////////////////////////////////////////////////////////

module.exports = {

    getCompliment: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
,
    getFortune: (req, res) => {
    let randomIndex = Math.floor(Math.random() * fortunes.length)
    let randomFortune = fortunes[randomIndex]

    res.status(200).send(randomFortune)
    }
,
    getColor: (req, res) => {
    let randomIndex = Math.floor(Math.random() * colors.length)
    let randomColor = colors[randomIndex]

    res.status(200).send(randomColor)
    }
,
    getMotivations: (req, res) => {
        res.status(200).send(motivations)
    }
,
    addMotivation: (req,res) => {
        let {item} = req.body
        motivations.push(item)

        res.status(200).send(motivations)
    }
}

