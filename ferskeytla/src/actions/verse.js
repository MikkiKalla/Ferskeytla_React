import { CALL_API } from 'redux-api-middleware';

const API_ROOT = "http://ferskeytla.herokuapp.com/";
export const fetchVerseByCat = category => ({
    [CALL_API]: {
        types:[
            {
                type: REQUEST_VERSEBYCAT,
                meta: (action, state, res)=>{
                    if(res){
                        return{
                            status: res.status,
                            statusText: res.statusText
                        };
                    } else {
                        return {
                            status:"Network request failed"
                        }
                    }
                }
            },
            {
                type: RECEIVE_VERSEBYCAT,
                meta: (action, state, res) => {
                    if(res) {
                        return{
                            status: res.status,
                            statusText: res.statusText,
                            receivedAr: Date.now()
                        };
                    }else{
                        return {
                            status: "Network Request failed"
                        }
                    }
                }
            },
            {
                type: FAILED_VERSEBYCAT,
                meta: (action, state, res) => {
                    if (res) {
                        return {
                            status: res.status,
                            statusText: res.statusText
                        };
                    } else {
                        status: "Network Request failed"
                    }
                }
            }
        ],
        endpoint: API_ROOT + "category/" + category,
        method: "GET"
    }
})