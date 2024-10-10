import React from "react";
import styles from "./app.module.css";

const App = () => {
  return (
    <div className="h-[100dvh] flex items-center justify-center ">
      <div className="flex gap-10 max-lg:flex-col bg-slate-500 lg:bg-indigo-400">
        <div className={styles.cart}>
          <div className="bg-red-500 h-20 col-span-2 hover:bg-blue-500 transition">
            col 1
          </div>
          <div className="bg-blue-500 h-20">col 2</div>
        </div>
        <div className={styles.cart}>
          <div className="bg-red-500 h-20 col-span-2 hover:bg-blue-500 transition">
            col 1
          </div>
          <div className="bg-blue-500 h-20">col 2</div>
        </div>
        <div className={styles.cart}>
          <div className="bg-red-500 h-20 col-span-2 hover:bg-blue-500 transition">
            col 1
          </div>
          <div className="bg-blue-500 h-20">col 2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
