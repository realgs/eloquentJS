function printTriangle(size) {
    const dash = "#";
    for (let i = 0; i < size; i++) {
        console.log(dash.repeat(i + 1));
    }
}
printTriangle(5);