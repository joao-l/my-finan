import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'

export default combineReducers({
  dashboard: DashboardReducer
})
