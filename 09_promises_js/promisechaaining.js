let p = new Promise((res, rej) => {
    rej("Promise Failed");
});

let p1 = p.then(() => {
    return new Promise((res, rej) => {
        res(2);
    });
});

let p2 = p1.then((data) => {
    return new Promise((res, rej) => {
        res(data * 2);
    });
});

p2
.then((data) => {
    console.log("Final Data:", data);
})
.catch((err) => {
    console.log("Error:", err);
});