import {createBrowserHistory} from "history";

const history = createBrowserHistory();

export const navigate = (url) => {
    history.push(url);
}



export default history;