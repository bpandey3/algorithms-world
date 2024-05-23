

class HashTable {
    public data:any;

    constructor(size:number) {
        this.data = new Array(size)
    }

    _hash(key: string): number {

        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key: string, value: any): void {

        let address = this._hash(key);
        //console.log(address);

        if(!this.data[address]){
            this.data[address]=[];

        }
        this.data[address].push([key,value]);
        //console.log(this.data);
        return this.data;

    } //O(1)

    get(key: string): any {
        let address = this._hash(key);
        //console.log(address);

       const currentBucket = this.data[address];
       if(currentBucket.length){
            for(let i=0; i< currentBucket.leangth; i++){
                if(currentBucket[i][0]=== key)
                    {
                        currentBucket[i][1];
                    }
            }
       }

        return undefined; //value
    } //O(1) or O(n)

    //Bruteforce
    keys() {

     const keys =[];
     for(let i=0; i< this.data.length; i++){
        if(this.data[i]){
            console.log(this.data[i][0][0])
            keys.push(this.data[i][0][0])
        }
     }
       return keys;
    }

    keysBest() {
        if (!this.data.length) {
          return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
              // but also loop through all the potential collisions
              if (this.data.length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                  result.push(this.data[i][j][0])
                }
              } else {
                result.push(this.data[i][0])
              } 
            }
        }
        return result; 
      }


}

const newHashTable = new HashTable(50);
newHashTable.set("grapes",1000)
newHashTable.set("apple",50)
newHashTable.set("oranges",99)

// console.log(newHashTable.set("grapes",1000));
// console.log(newHashTable.set("apple",50));
// console.log(newHashTable.set("oranges",99));

//console.log(newHashTable.get("grapes"));

console.log(newHashTable.keysBest());
