class MyClass{
    constructor(name,plate,imgsrc){
        this.name=name,
        this.plate=plate,
        this.registerTime=new Date().getTime()
        this.isodate=new Date().toISOString()
        this.localdate=new Date().toLocaleString()
        this.imgsrc=imgsrc
    }
}