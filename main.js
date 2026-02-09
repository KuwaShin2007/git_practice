let birth = parseInt (prompt("生まれた年を入力："));
if (2019 <= birth){
    console.log("令和");
}
else if (2019 > birth && birth >= 1989){
    console.log("平成");
}
else{
    console.log("じじばば");
}
console.log("判定終了");