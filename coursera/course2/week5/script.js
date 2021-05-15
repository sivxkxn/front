'use strict';
    function isRightInput(element){
    let isRequired=(element.dataset.required===undefined)?0:1;
    // console.log(isRequired)
    let validator=element.dataset.validator;

    if(validator==='letters'){
    if(element.value.length!==0 && /^[a-zA-Zа-яА-Я]+$/.test(element.value)) return true;
    else return false;
    }
    else if(validator==='number') {
        if (parseInt(element.dataset.validatorMin) && parseInt(element.dataset.validatorMax)) {
            let min = parseInt(element.dataset.validatorMin);
            let max = parseInt(element.dataset.validatorMax);
            console.log(min);
            let num = parseInt(element.value);
            if (num >= min && num <= max) return true;
            else return false;
        }
        else if(!isNaN(Number(element.value)))return true
        else return false
    }
    else if(validator==='regexp')
    {
    let pattern= new RegExp(element.dataset.validatorPattern);
    // console.log(element.dataset.validatorPattern)
    if(pattern.test(element.value)) return true;
    else return false;
    }
    // return false;
}
function validateForm(obj) {
    const inputArr=Array.from(document.querySelectorAll('input'));
    const form=document.getElementById(obj.formId);
    for (const inputArrElement of inputArr) {
        inputArrElement.addEventListener('blur', function (e)
        {
            let element=e.target;
            if(!isRightInput(element)){
                element.classList.add(obj.inputErrorClass);
            }
            e.stopPropagation();
        });
        inputArrElement.addEventListener('focus', function (e){
            let element=e.target;
            if(element.matches("."+obj.inputErrorClass)){
                element.classList.remove(obj.inputErrorClass);
            }
            e.stopPropagation();
        })
    }
    form.addEventListener("submit", function (event){
        event.stopPropagation();
        let resultArr=[];
        const inputArr=Array.from(document.getElementsByTagName("input"));
        for(let element of inputArr)
        {
            resultArr+=isRightInput(element);
        }
        if(resultArr.includes(false)){
        form.classList.remove(obj.formValidClass);
        form.classList.add(obj.formInvalidClass);

        }
        else if(resultArr.length!==0){
            form.classList.remove(obj.formInvalidClass);
            form.classList.add(obj.formValidClass);
        }

    });
}


