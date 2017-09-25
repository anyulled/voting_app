/**
 * Created by anyulled on 9/12/16.
 */
import {createStore} from "redux";
import reducer from "./reducer";

export default () => createStore(reducer);