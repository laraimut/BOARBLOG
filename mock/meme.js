import  axios from "axios";



function getMeme(){
    return axios.get("https://meme-api.herokuapp.com/gimme")
        .then(res => res)
}

export  default getMeme;