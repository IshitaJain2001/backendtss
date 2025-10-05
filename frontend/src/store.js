import { createStore } from "redux";
import { reducerfn } from "./initialState";

 const store= createStore(reducerfn)


  export default store;