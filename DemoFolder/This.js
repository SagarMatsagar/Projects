let sagar = {
    name : 'sagar',
    lname : 'matsagar',
    fullname : function (){
        console.log(this)
        console.log(this.name+' '+this.lname)
    }
}

sagar.fullname()