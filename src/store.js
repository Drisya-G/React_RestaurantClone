import { combineReducers,applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
//to generate middleware 
import { restaurantListReducer } from './Reducers/restaurantReducer';


const reducers=combineReducers({        //2

        restaurantReducer:restaurantListReducer
        // key : function
})

const middleware=[thunk]
const store=createStore(reducers,applyMiddleware(...middleware))  //1     ... is spread operator


export default store //we need to export to get access in other functions 
