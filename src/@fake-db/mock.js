import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// console.log(axios.defaults.adapter);

const mock = new MockAdapter(axios);

// console.log(mock);

export default mock;