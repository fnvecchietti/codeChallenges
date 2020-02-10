import { Animal, Lion, Tiger } from "../app/src/component/zoo"



describe('test zoo clases',()=>{

    it('should create an animal', ()=>{
        const animal = new Animal

        expect(animal).toBeTruthy()
    })
    it('should create an animal with a speak method', ()=>{
        const animal = new Animal

        expect(animal.speak).toBeTruthy()
    })
    it('should create a Lion', ()=>{
        const lion = new Lion


        expect(lion).toBeTruthy()
    })
    it('should create a Lion that Roars!',()=>{
        const lion = new Lion
        
        expect(lion.speak("i'm a lion")).toBe("i'm roar a roar lion roar")
    })
    it('should create a Tiger', ()=>{
        const tiger = new Tiger

        expect(tiger).toBeTruthy()
    })
    it('should create a Tiger that grrrs!',()=>{
        const tiger = new Tiger
        
        expect(tiger.speak("Lions suck")).toBe("Lions grrr suck grrr")
    })
})