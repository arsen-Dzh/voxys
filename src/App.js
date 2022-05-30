import  React from 'react';

function App() {
  const now = new Date();

  const busTimer = (h, m) => {
    const busIntetval = 15;
    const speedT = 5;
    const minutesNow = h * 60 + m;
    const start = 6 * 60;
    const dayMinutes = 24 * 60;
  
    if(minutesNow + speedT <= start || (minutesNow > dayMinutes-speedT && minutesNow + speedT >= start)){
      return getTimeFromMins(start - speedT)
    }
  
    for(let i = start; i <= dayMinutes; i += busIntetval ) {
      if(minutesNow + speedT <= i){
        return getTimeFromMins(i - speedT)
      }
    }
  }
  
  const getTimeFromMins = (t) => {
    let h = Math.trunc(t/60);
    let m = t % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m
    return h + `:` + m;
  };

  return (
    <>
      <h4>Чтобы успеть на автобус, выйдете из дома в: </h4>
      <span>{busTimer(now.getHours(), now.getMinutes())}</span>
    </>
  );
}

export default App;
