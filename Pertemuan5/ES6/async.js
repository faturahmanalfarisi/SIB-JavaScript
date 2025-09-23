function download(){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        // console.log("Downloading");
        resolve("Downloading...")
    }, 3000);
});
}
function verify(){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        // console.log("Verify file...")
        resolve("Verify File...")
    }, 2000);
    
});
}
function notify(){
    console.log("Download Complete")
}
//consuming feedback promise
// download()
// .then((resaults)=>{
//     console.log(resaults);
//     return verify();
// })
// .then((resaults)=>{
//     console.log("resaults");
//     notify();
// })
// .catch((error)=>{
//     console.log(error);
// })
// function main(){
//     download();
//     verify();
//     notify();

// }
//cosuming feedback menggunakan async await
const main = async ()=>{
    console.log(await download());
    console.log(await verify());
    notify();
}
main();