class Post {
    constructor(title){
        this.name = title;
        this.date = new Date();
    }
    toString(){
        return JSON.stringify({
            name: this.name,
            date: this.date.toJSON
        })
    }
}