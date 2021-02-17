const fs = require('fs')
//const readLineSync = require('readline-sync')
class JsonStorage {
    constructor(filePath) {
        this.filePath = filePath
        this.obj = {}
    }
    get nextId() {
        return this.readItems().nextId
    }

    incrementNextId() {
        let newModel={}
        newModel.nextId=++this.obj.nextId
        newModel.items=this.readItems().items
        const text = JSON.stringify(newModel, null, 4)
        fs.writeFileSync(this.filePath, text)

    }

    readItems() {
        let jsonText = fs.readFileSync(this.filePath)
        let module = JSON.parse(jsonText);
        this.obj = module
        return this.obj
    }
    writeItems(items) {
        let newModel = {}
        newModel.nextId = ++this.obj.nextId
        newModel.items = items
        const text = JSON.stringify(newModel, null, 4)
        fs.writeFileSync(this.filePath, text)

    }
}

module.exports = JsonStorage