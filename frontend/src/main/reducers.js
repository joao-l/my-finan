import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'

export default combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer
})
