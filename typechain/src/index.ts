import crypto from "crypto";

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash:string, height:number, data:string){
        const toHash = `${prevHash}${height}${data}`
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class Blockchain {
    private blocks: Block[]
    constructor() {
        this.blocks = [];
    }
    private getPrevHash(){
        if (this.blocks.length === 0) return ""
        return this.blocks[this.blocks.length - 1].hash;
    }
    public addBlock(data:string){
        const newBlock = new Block(
            this.getPrevHash(), 
            this.blocks.length + 1, 
            data
        );
        this.blocks.push(newBlock);
    }
    public getBlocks() {
        return [...this.blocks] // ... = 전개연산자. this.block의 모든 요소를 새로운 배열에 복사하여 반환함
    }                           // 전개 연산자를 사용하지 않고 return this.blocks 를 사용했다면 
}                               // getBlocks()이 public이기 때문에 blockchain.getBlocks.push()로 접근이 가능함

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlocks())