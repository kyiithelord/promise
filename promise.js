const runBtn = document.querySelector("#runBtn");


runBtn.addEventListener("click",() => {

    // const f = fetch("https://fakestoreapi.com/products/1");
    // console.log(f.then());

    // let x ;
    // setTimeout(() => {
    //     x = 10;
    // },3000);
    // console.log(x);


    // let x ;
    // const p = new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //         x = 10;
    //         reject(x);
    //     },3000)
        
    // })
    // p.then((data) => {
    //     console.log("Resolve Work");
    //     console.log(data);
    // },(data) => {
    //     console.log("Reject Work");
    //     console.log(x);
        
    // })


//    let x;
//    const p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         x = (Math.random() * 10).toFixed(0);
//         if(x>5){
//             resolve(x)
//         }else{
//             reject(x)
//         }
//     },1500)
    
//    })
//    p.then((data) => {
//     console.log("Resolve Work");
//     console.log(x);
    
//    },(data) => {
//     console.log("Reject Work");
//     console.log(x);
    
//    })



const p = new Promise((resolve,reject) => {
    navigator.geolocation.getCurrentPosition((coords) => {
        resolve(coords)
        
    })
    
})
p.then((data) => {
    console.log(data);
})



});