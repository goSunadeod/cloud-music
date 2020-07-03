import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/Recommend/store/index';
import { reducer as singersReducer } from '../application/Singers/store/index';
import { reducer as albumReducer } from "../application/Album/store/index";
import { reducer as singerInfoReducer } from "../application/Singer/store/index";
import { reducer as playerReducer } from "../application/Player/store/index";


export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  album: albumReducer,
  singerInfo: singerInfoReducer,
  player: playerReducer,
});