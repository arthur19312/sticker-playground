import {
  DATABASE_NAME,
  MAIN_STORE,
  STORE_KEY,
  STORE_CONTENT,
} from "./constant";

export const fillStoreByState = (store, state) => {
  for (const key in state) {
    const value = state[key];
    const request = store.put({ [STORE_KEY]: key, [STORE_CONTENT]: value });

    request.onsuccess = () => {
      console.log("数据库更新成功", new Date().toLocaleTimeString());
    };

    request.onerror = (e) => {
      console.log("数据写入失败", new Date().toLocaleTimeString());
      console.log(e);
    };
  }
};

/** 新建表 */
export const createStore = (db, state) => {
  const newStore = db.current.createObjectStore(MAIN_STORE, {
    keyPath: STORE_KEY,
  });
  newStore.createIndex(STORE_KEY, STORE_KEY);
  newStore.createIndex(STORE_CONTENT, STORE_CONTENT);
  updateStore(db, state);
};

/** 更新表 */
export const updateStore = (db, state) => {
  if (!db.current.transaction) return;
  try {
    const store = db.current
      .transaction([MAIN_STORE], "readwrite")
      .objectStore(MAIN_STORE);
    fillStoreByState(store, state);
  } catch (error) {
    console.log("数据库操作失败");
    console.log(error);
  }
};

/** 打开或新建数据库 */
export const openStorage = (db, state) => {
  const request = window.indexedDB.open(DATABASE_NAME);
  request.onerror = (e) => {
    console.log(
      "数据库打开失败，本地同步indexedDB失效，请检查浏览器是否支持indexedDB"
    );
    console.log(e);
  };
  request.onsuccess = () => {
    db.current = request.result;
    console.log("数据库打开成功");
  };
  request.onupgradeneeded = (e) => {
    db.current = e.target.result;
    console.log("数据库版本更新");

    if (!db.objectStoreNames.contains(MAIN_STORE)) {
      createStore(db, state);
    }
  };
};
