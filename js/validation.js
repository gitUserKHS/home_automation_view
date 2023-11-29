const form = document.querySelector('form.row');
const btn = document.querySelector('button.submit');
const inputs = form.querySelectorAll('input');
var displaySuccessMessage = null;

btn.addEventListener('click',()=>{
    let submitAllowed = true;
    for(const input of inputs){
        if(input.value === ""){
            submitAllowed = false;
            alert('입력칸이 비어있습니다.');
            break;
        }
        else if(input.value.trim() !== input.value){
            submitAllowed = false;
            alert('입력값 앞 또는 뒤에 공백(space)가 있습니다.');
            break;
        }
    }
    if(submitAllowed) {
        if(displaySuccessMessage) displaySuccessMessage();
        form.submit();
    }
});