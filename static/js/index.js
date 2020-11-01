var btns = document.getElementsByClassName('addToCart')

for(i=0; i<=btns.length ; i++){
    if(btns[i]){
    btns[i].addEventListener('click' , function(){
        var productId = this.dataset.product; 
        var functioni = this.dataset.action;
        console.log(csrftoken) 

        if(user === 'AnonymousUser'){
            console.log('Not authenticated')
        }
        else{
            updateCartOrder(productId , functioni)

        }
    })

}


function updateCartOrder(productId , action){

    var url = '/update-item/'
    fetch(url , {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body:JSON.stringify({'productId': productId , 'action':action})
    })
    .then((response) =>{
        return response.json();
    })
    .then((data)=>{
        console.log('Data:' , data)
    })

}
}