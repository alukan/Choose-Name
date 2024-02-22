import axios from 'axios';
import namesData from '../data/names.json';
interface Callbacks {
    CallbackBefore?: () => void;
    CallbackAfter?: () => void;
}


export const getNamesData = async (setNames: React.Dispatch<React.SetStateAction<string[]>>, { CallbackBefore, CallbackAfter }: Callbacks) => {
    const gender = localStorage.getItem('gender');
    const popular = localStorage.getItem('popular');
    console.log(gender, popular);
    const apiKey = process.env.REACT_APP_API_KEY;
    CallbackBefore ? CallbackBefore() : null;
    axios({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/babynames?gender=${gender}&popular_only=${popular}`,
        headers: {
            'X-Api-Key': apiKey,
        },

    })
        .finally(() => { CallbackAfter ? CallbackAfter() : null; })
        .then(response => {
            console.log(response.data);
            setNames(response.data)
        })
        .catch(error => {
            console.error('There was a problem with your Axios request:', error);
            if(gender === 'boy')
                setNames(namesData.BoyNames)
            else if(gender === 'girl')
                setNames(namesData.GirlNames)
            else if(gender === 'neutral')
                setNames(namesData.NeutralNames)
        });
}
