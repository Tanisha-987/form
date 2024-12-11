let submit=document.getElementById("submit")

submit.addEventListener('click',function(e)
{

e.preventDefault()
let error=document.getElementsByClassName("error")

let a=document.getElementById("a").value
let b=document.getElementById("b").value
let c=document.getElementById("c").value

    if(a==="")
    {
        error[0].innerHTML='\u274C' + 'please enter required info...'
    }
    else
    {
        error[0].innerHTML='\u2705'
    }

    if(b==="")
    {
        error[1].innerHTML='\u274C' + 'please enter required info...'
    }
    else
    {
        error[1].innerHTML='\u2705'
    }

    if(c==="")
    {
        error[2].innerHTML='\u274C' + 'please enter required info...'
    }
    else
    {
        error[2].innerHTML='\u2705'
    }

//----------------------------------------------

let dob=document.getElementById("dob").value
    
    if(dob==="")
    {
        error[3].innerHTML='\u274C' + 'DOB is mandatory.....'
    }
    else
    {
        error[3].innerHTML='\u2705'
    }

//----------------------------------------------
let email=document.getElementById("email").value

let emaillen = email.length
let last=email.substring(emaillen-10)

    if(last.toLowerCase()==="@gmail.com")
    {
        error[4].innerHTML='\u2705'
    }
    else
    {
        error[4].innerHTML='\u274C' + '@gmail.com is mandatory'
    }

//---------------------------------------------

let mob=document.getElementById("mob").value
let moblen=mob.length

    if(moblen==10)
    {
        error[5].innerHTML='\u2705'
    }
    else
    {
        error[5].innerHTML='\u274C' + 'ENTER A VALID MOB......'
    }
})
