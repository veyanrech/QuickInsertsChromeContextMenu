function DBinstance() {
    let db = null;
    db = ((context) => {
        return context.indexedDB || context.mozIndexedDB || context.webkitIndexedDB || context.msIndexedDB;
    })(this)

    console.log(db)
}

(() => {
    const dbinst = new DBinstance()
    console.log(dbinst)
})()