import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { openStorage, updateStore } from "./helper";

const Storage = () => {
  const state = useSelector((state) => state);
  const { useStorage, autoUpdateInterval } = useSelector(
    (state) => state.storageConfig
  );
  const db = useRef(null);
  const intervalRef = useRef(0);

  const startTimer = () => {
    setTimeout(() => {
      updateStore(db, state);
    }, 100);
    intervalRef = setInterval(() => {
      updateStore(db, state);
    }, autoUpdateInterval);
  };

  const clearTimer = () => {
    clearInterval(intervalRef);
  };

  useEffect(() => {
    openStorage(db, state);
    startTimer();
  }, []);

  useEffect(() => {
    if (useStorage) {
      clearTimer();
      startTimer();
    } else {
      clearTimer();
    }
    return () => {
      clearTimer();
    };
  }, [useStorage]);

  useEffect(() => {
    clearTimer();
    startTimer();
    return () => {
      clearTimer();
    };
  }, [autoUpdateInterval]);

  return <></>;
};

export default Storage;
