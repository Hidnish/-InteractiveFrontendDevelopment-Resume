function* generatorFunc() {
    let data = getData();
    yield data;
    console.log(data);
}

