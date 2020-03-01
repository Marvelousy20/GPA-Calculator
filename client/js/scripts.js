function calcResult(){
    let a = document.getElementById('select1') ;
    let val = a.options[a.selectedIndex].value ;       
    console.log(val) ;

    let b = document.getElementById('select2') ;
    let val2 = b.options[b.selectedIndex].value ;
    console.log(val2) ;

    let c = document.getElementById('select3') ;
    let val3 = c.options[c.selectedIndex].value ;
    console.log(val3) ;

    let d = document.getElementById('select4') ;
    let val4 = d.options[d.selectedIndex].value ;
    console.log(val4) ;

    let e = document.getElementById('select5') ;
    let val5 = e.options[e.selectedIndex].value ;
    console.log(val5) ;

    let f = document.getElementById('select6') ;
    let val6 = f.options[f.selectedIndex].value ;
    console.log(val6) ;

    let g = document.getElementById('select7') ;
    let val7 = g.options[g.selectedIndex].value ;
    console.log(val7) ;

    let h = document.getElementById('select8') ;
    let val8 = h.options[h.selectedIndex].value ;
    console.log(val8) ;

    // add courses id starts here
    let i = document.getElementById('same3') ;
    let val9 = i.options[i.selectedIndex].value ;
    console.log(val9) ;

    let j = document.getElementById('same6') ;
    let val10 = j.options[j.selectedIndex].value ; 
    console.log(val10) ; // add courses id for grades end here
    
    let myArray = [] ;
    
    myArray.push(val,val2,val3,val4,val5,val6,val7,val8,val9,val10) ;
    console.log(myArray) ;

    // To convert the array values (strings) to Numbers
    let noArray = myArray.map(x=>+x) 
    console.log(noArray) ;

    // let newArray = noArray.reduce((accumulator,currentValue,currentIndex, array) => {
    //     return accumulator + currentValue 
    // })
    // console.log(newArray) ;

    let unit = document.getElementById('units').value ;
    console.log(unit)
    let unit2 = document.getElementById('units2').value ;
    console.log(unit2)
    let unit3 = document.getElementById('units3').value ;
    console.log(unit3)
    let unit4 = document.getElementById('units4').value ;
    console.log(unit4)
    let unit5 = document.getElementById('units5').value ;
    console.log(unit5)
    let unit6 = document.getElementById('units6').value ;
    console.log(unit6)
    let unit7 = document.getElementById('units7').value ;
    console.log(unit7)
    let unit8 = document.getElementById('units8').value ;
    console.log(unit8)
    let unit9 = document.getElementById('same2').value ;
    console.log(unit8)
    let unit10 = document.getElementById('same5').value ;
    console.log(unit8)

    let unitArray = [] ;
    unitArray.push(unit,unit2,unit3,unit4,unit5,unit6,unit7,unit8,unit9,unit10) ;
    console.log(unitArray) ;

    let newUnitArray = unitArray.map(x=>+x) ;
    console.log(newUnitArray) ;

    let selectedValue = document.getElementById('reduce-size');
    if (selectedValue.options[selectedValue.selectedIndex].value === "5") {
        var sum = 0;
        for(let i =0; i<newUnitArray.length; i++) {
            sum += newUnitArray[i] * noArray[i] ;
        }
        console.log(sum)

        const constNo = 5 ;
        let sum2 = 0;
        for(let i = 0; i<newUnitArray.length; i++) {
            sum2 += newUnitArray[i] * constNo 
        }
        console.log(sum2) ;
        
        const result = (sum/sum2) * 5  
        console.log(result) ;

        if(Object.is(result, NaN)) {
            alert('Ooops! Invalid values, please check again.')
        }
        else {
            let outPutResult = document.getElementById('resultOutcome').innerHTML = Math.round((result)*100) / 100;
        }
    }

    else if(selectedValue.options[selectedValue.selectedIndex].value === "4") {
        var sum = 0;
        for(let i =0; i<newUnitArray.length; i++) {
            sum += newUnitArray[i] * noArray[i] ;
        }
        console.log(sum)
    
        const constNo = 5 ;
        let sum2 = 0;
        for(let i = 0; i<newUnitArray.length; i++) {
            sum2 += newUnitArray[i] * constNo 
        }
        console.log(sum2) ;
            
        const result = (sum/sum2) * 4  
        console.log(result) ;
    
        if (Number.isNaN(result)) {
            alert('Ooops! Invilid values, please check again.')
        }

        else{
            let outPutResult = document.getElementById('resultOutcome').innerHTML = Math.round((result)*100) / 100;
        }
    }

    else {
        alert("Please select a grade scale") ;
    }
} 


function addCourse() {
    let addMore = document.getElementById('same') ;
    addMore.style.display = 'block' ;

    let addMoreTwo = document.getElementById('same2') ;
    addMoreTwo.style.display = 'block'

    let addMoreThree = document.getElementById('same3') ;
    addMoreThree.style.display = 'block'

    let addMore1 = document.getElementById('same4') ;
    addMore1.style.display = 'block' ;

    let addMore2 = document.getElementById('same5') ;
    addMore2.style.display = 'block' ;

    let addMore3 = document.getElementById('same6') ;
    addMore3.style.display = 'block' ;
}


