import axios from "axios";
import {FormikDataType} from "../sections/myContacts/FormComponent";

class Api {
    checkServer() {
        return  axios.get('https://gmail-smtp-alex-vell.vercel.app/')
            // .then((res) => {
            //     console.log(res.data)
            // })
    }

    sendMessage(value: FormikDataType) {
        return  axios.post('https://gmail-smtp-portfolio.vercel.app/sendMessage', value)
            // .then((res) => {
            //     console.log(res.data)
            // })
    }
}

export const api = new Api();
