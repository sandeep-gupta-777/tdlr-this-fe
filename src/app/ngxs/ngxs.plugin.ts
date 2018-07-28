import {getActionTypeFromInstance} from '@ngxs/store';
import {tap} from 'rxjs/operators';
import {ConstantService} from '../constant.service';

/*
* This plugin will
* 1. Store the state in localstorage, after every action
* 2. After page is refreshed, read from localstorage data and write that into state
* */
export function persistPlugin(state, action, next) {

  // console.log('entering plugin=================');
  // // After every refresh first action fired will be @@INIT
  // if (getActionTypeFromInstance(action) === '@@INIT') {
  //
  //   // reading from local storage and writing into state, when app is refreshed
  //   let storedStateStr = localStorage.getItem('LOCALSTORAGE_APP_STATE');
  //   console.log('ngxs init');
  //   let storedState = JSON.parse(storedStateStr);
  //   state = {...state, ...storedState};
  //   ConstantService.state = state;
  //   return next(state, action);
  // }
  //
  // return next(state, action).pipe(tap(result => {
  //   ConstantService.state = state;
  //   console.log('Action happened!', result);
  //   localStorage.setItem('LOCALSTORAGE_APP_STATE', JSON.stringify(result));;
  // }));
}
