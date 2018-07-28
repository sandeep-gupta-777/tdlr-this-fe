import {Action, State, StateContext} from '@ngxs/store';
import {SetUserAction} from './auth.action';
import {ConstantService} from '../../constant.service';
import {IUser} from '../../../interfaces/user';

export interface IAuthState {
  user?: IUser;
}

@State<IAuthState>({
  name:'loggeduser',
  defaults:{
    user:null
  }
})

//same as reducer
export class AuthStateReducer {

  constructor(){}
  @Action(SetUserAction)
  setUser({patchState, setState, getState,dispatch}:StateContext<IAuthState>, payload : SetUserAction){
    patchState({user:payload.payload.user});
  }
}
