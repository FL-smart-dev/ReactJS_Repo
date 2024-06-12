export function getDate(){
    const todaysDate = new Date();
   let gendate = todaysDate.getMonth()+1 +"-"+ todaysDate.getDate() + "-"+ todaysDate.getFullYear()
    return gendate
}
