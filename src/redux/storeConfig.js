import { combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import locationReducer from "./locationReducer";
import themeReducer from "./themeReducer";
import welcomeReducer from "./welcomeReducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  path: locationReducer,
  theme: themeReducer,
  welcome: welcomeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
