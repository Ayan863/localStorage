let names = ["Oliver", "Emma", "James", "Sophia", "Liam", "Isabella", "Ethan", "Mia", "Lucas"];

// Task 
// 3 dene function quracaqsiz bir function usersleri adlandiran
// function olacaq yeni dinamik olaraq usernameler vereceksiz

// o functionda localeStoragede onu users keyine value olaraq
// Array seklinde elave edecek
localStorage.setItem("users",JSON.stringify(names))

// 2ci function dinamik olaraq username qebul edib localeStorageden
// hemin usernameni silecek
// usersleri silen func
const array = JSON.parse(localStorage.getItem("users"))

const func2=(name)=>{
    let k=0
    array.find((item,index)=>item==name ? (array.splice(index,1) ,k=1): null)
    if(k!=1){
        try{
            throw new Error(`${name} adli data movcud deyil`)
        }catch(err){
            console.log(err.message);
        }
    }
    localStorage.setItem("users",JSON.stringify(array))
}
func2("Sophiaa");

// 3 cu function ise umumi localestoragedeki users arrayini pars
// olunmus halini logda daima gosderecek
// arrayi pars eden 
console.log(JSON.parse(localStorage.getItem("users")));
