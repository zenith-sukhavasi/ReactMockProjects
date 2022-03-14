import { configureStore } from '@reduxjs/toolkit'
//import { watcherSaga } from './sagas/rootSaga'
import Users, { users } from './slices/Users'


//const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
      users:Users
  },
 // middleware:[sagaMiddleware]

})

//sagaMiddleware.run(watcherSaga)

