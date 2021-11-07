"use strict"; 

document.addEventListener('scroll', function(){
    if(scrollY >= 377)
    {
        document.getElementById('second_nav').style.display = 'flex'
    } else if(scrollY < 377)
    {
        document.getElementById('second_nav').style.display = 'none'
    }
})


document.getElementById('nav_profile').addEventListener('click', function(){
    document.querySelector('.Profile_header').scrollIntoView({
        behavior: 'smooth'
    })
}) 

document.getElementById('nav_work').addEventListener('click', function(){
    document.querySelector('.work_header').scrollIntoView({
        behavior: 'smooth'
    })
}) 

document.getElementById('nav_education').addEventListener('click', function(){
    document.querySelector('.Education_header').scrollIntoView({
        behavior: 'smooth'
    })
})  

document.getElementById('nav_projects').addEventListener('click', function(){
    document.querySelector('.Projects').scrollIntoView({
        behavior: 'smooth'
    })
})  

document.getElementById('nav_hobbies').addEventListener('click', function(){
    document.querySelector('.hobbies').scrollIntoView({
        behavior: 'smooth'
    })
})  

// second navication

document.getElementById('nav_profile_2').addEventListener('click', function(){
    document.querySelector('.Profile_header').scrollIntoView({
        behavior: 'smooth'
    })
}) 

document.getElementById('nav_work_2').addEventListener('click', function(){
    document.querySelector('.work_header').scrollIntoView({
        behavior: 'smooth'
    })
}) 

document.getElementById('nav_education_2').addEventListener('click', function(){
    document.querySelector('.Education_header').scrollIntoView({
        behavior: 'smooth'
    })
})  

document.getElementById('nav_projects_2').addEventListener('click', function(){
    document.querySelector('.Projects').scrollIntoView({
        behavior: 'smooth'
    })
})  

document.getElementById('nav_hobbies_2').addEventListener('click', function(){
    document.querySelector('.hobbies').scrollIntoView({
        behavior: 'smooth'
    })
})
