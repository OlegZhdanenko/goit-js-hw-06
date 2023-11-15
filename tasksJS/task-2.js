class Storage {
    #items;
    constructor( items ) {
        this.#items=items
    }
    getItems() {
        return this.#items
    };
    addItem(newItem) {
        return this.#items.push(newItem) 
    }
    removeItem(itemToRemove) {
        if (this.#items.includes(itemToRemove)) {
            const indexItem = this.#items.indexOf(itemToRemove) ;
          return  this.#items.splice(indexItem,1)
        }
    }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]