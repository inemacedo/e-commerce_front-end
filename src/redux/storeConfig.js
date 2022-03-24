import { combineReducers, createStore } from "redux";
import shoppingCartReducer from "../redux/shoppingCartReducer";
import userReducer from "./userReducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer, //tweet y users es el nombre de la parte del store donde estan guardados los datos
  // que van a ser gestionadas por los reducers
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
