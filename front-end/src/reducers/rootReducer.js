import { combineReducers } from 'redux';
import user from './userReducer'
import songResults from './songResultsReducer'
import playlist from './playlistReducer'
import chat from './chatReducer'
import showWelcome from './showWelcomeReducer'
import groups from './groupsReducer'
import group from './groupReducer'

export default combineReducers({user, songResults, playlist, showWelcome, groups, group, chat})
