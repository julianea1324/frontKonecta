import {combineReducers} from 'redux';
import { AuthReducer } from './AuthReducer';
import { blogReducer } from './blogReducer';
import { CateReduxer } from './CateReduxer';
import { CommentariesReducer } from './CommentariesReducer';
import { UserRedux } from './UserRedux';

export const rootReducer = combineReducers({
    auth: AuthReducer,
    blog:blogReducer,
    commentaries: CommentariesReducer,
    categories: CateReduxer,
    users: UserRedux
})