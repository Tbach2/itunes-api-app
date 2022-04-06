/**
 * A modified array with add and remove methods
 * @param {Function|Class} typeOfItem Constructor function
 * @returns {*[]}
 * @constructor
 */
export default function Collection(typeOfItem) {
    let arr = [];

    arr.addItem = function (item) {
        // add remove method to the item
        // v1.1
        // item.remove = (collection =>
        //         function () {
        //             collection.removeItem(this); // this === item
        //         }
        // )(this); // this === collection

        // v1.2
        // item.remove = function () {
        //     arr.removeItem(this);
        // };
        //
        // item.duplicate = function(){};

        // this only works with a decorator constructor
        //this.push(new typeOfItem(item));

        // v1.3
        // this.push(Object.assign(item, new typeOfItem()));

        // v2
        //this.push(Object.assign(item, new typeOfItem(), new Collectable(this)));

        // v2.1
        typeOfItem.call(item); // call the "typeOfItem" constructor using "item" as "this" in the constructor
        Collectable.call(item, this);
        this.push(item);

        // return "this" to utilize chaining
        return this;
    }

    arr.removeItem = function (item) {
        this.splice(this.indexOf(item), 1);

        return this;
    }

    return arr;
}

/**
 *
 * @param {Collection} collection
 * @constructor
 */
function Collectable(collection){
    this.remove = function () {
        collection.removeItem(this);
    };

    this.duplicate = function(){};
}
