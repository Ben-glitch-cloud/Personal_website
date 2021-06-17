"use strict"; 


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

