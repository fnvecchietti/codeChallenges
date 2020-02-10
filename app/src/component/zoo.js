 class Animal {


    speak(phrase){
        phrase = phrase.split(/\s+/)
       
        this.output = []
        phrase.forEach(word => {
            this.output.push(word)
            this.output.push(this.sound)

            
        });
        this.output = this.output.reduce((p,c)=>{
            return p+' '+c
        })
        return this.output
    }
}

 class Lion extends Animal {
    constructor(){
        super()
        this.sound = 'roar'
    }
}
 class Tiger extends Animal{
    constructor(){
        super()
        this.sound = 'grrr'
    }
}

(function(){
    lion = new Lion
    console.log(lion.speak("i'm a lion"))

    tiger = new Tiger
    console.log(tiger.speak("lions sucks"))

}())

//if runs locally and need to test it should export classes.