"use strict"; 

let scrollPostion = 0 


// Scroll Postion  

function ChangeOpacity(element, low, high){ scrollPostion > low && scrollPostion < high ? element.style.opacity = 1 : null}

document.addEventListener('scroll', function(){scrollPostion = window.scrollY})

let mainProfile = document.getElementById("main_profile") 

document.addEventListener('scroll', function(){  
    if(scrollPostion > mainProfile.offsetTop - 270  && scrollPostion < mainProfile.offsetTop + 210){ 
        mainProfile.style.animationName = 'Profile_fadeIn'
        setTimeout(ChangeOpacity(mainProfile, mainProfile.offsetTop - 270, mainProfile.offsetTop + 210), 1200) 
    } else {   
        mainProfile.style.animationName = 'Profile_fadeOut'
        mainProfile.style.opacity = 0
    } 
})  

let project_one = document.getElementById("project_one")
let projects_two = document.getElementById("projects_two") 
let projects_three = document.getElementById("projects_three") 

document.addEventListener('scroll', function(){
    if(scrollPostion > project_one.offsetTop - 310 && scrollPostion < project_one.offsetTop + 250){  

        setTimeout(function(){
            project_one.style.animationName = 'ProjectFadeIn'  
            setTimeout(ChangeOpacity(project_one, project_one.offsetTop - 310, project_one.offsetTop + 250), 1200)  
        }, 0)

        setTimeout(function(){ 
            projects_two.style.animationName = 'ProjectFadeIn' 
            setTimeout(ChangeOpacity(projects_two, projects_two.offsetTop - 310, projects_two.offsetTop + 250), 1200) 
        }, 1000)
          
        setTimeout(function(){
            projects_three.style.animationName = 'ProjectFadeIn' 
            setTimeout(ChangeOpacity(projects_three, projects_three.offsetTop - 310, projects_three.offsetTop + 250), 1200)
        }, 2000)
         
    } else {
        project_one.style.animationName = null
        projects_two.style.animationName = null
        projects_three.style.animationName = null
        
        project_one.style.opacity = 0 
        projects_two.style.opacity = 0
        projects_three.style.opacity = 0
    }
})

// work


let work_area_one = document.getElementById("work_area_one") 
let work_area_two = document.getElementById('work_area_two') 
let work_area_three = document.getElementById('work_area_three') 
let work_area_four = document.getElementById('work_area_four')


document.addEventListener('scroll', function(){

    // one 

    if(scrollPostion > work_area_one.offsetTop - 300 && scrollPostion < work_area_one.offsetTop){
        work_area_one.style.animationName = 'WorkFadeIn' 
        setTimeout(ChangeOpacity(work_area_one, work_area_one.offsetTop - 300, work_area_one.offsetTop), 1200) 
    } else { 
        work_area_one.style.animationName = 'WorkFadeOut'
        work_area_one.style.opacity = 0 
    }  

    // two

    if(scrollPostion > work_area_two.offsetTop - 300 && scrollPostion < work_area_two.offsetTop){
        work_area_two.style.animationName = 'WorkFadeIn' 
        setTimeout(ChangeOpacity(work_area_two, work_area_two.offsetTop - 300, work_area_two.offsetTop), 1200) 
    } else { 
        work_area_two.style.animationName = 'WorkFadeOut'
        work_area_two.style.opacity = 0 
    } 

    // three

    if(scrollPostion > work_area_three.offsetTop - 200 && scrollPostion < work_area_three.offsetTop + 100){
        work_area_three.style.animationName = 'WorkFadeIn' 
        setTimeout(ChangeOpacity(work_area_three, work_area_three.offsetTop - 200, work_area_three.offsetTop + 100), 1200) 
    } else { 
        work_area_three.style.animationName = 'WorkFadeOut'
        work_area_three.style.opacity = 0 
    } 

    // four 

    if(scrollPostion > work_area_four.offsetTop - 260 && scrollPostion < work_area_four.offsetTop){
        work_area_four.style.animationName = 'WorkFadeIn' 
        setTimeout(ChangeOpacity(work_area_four, work_area_four.offsetTop - 260, work_area_four.offsetTop), 1200) 
    } else { 
        work_area_four.style.animationName = 'WorkFadeOut'
        work_area_four.style.opacity = 0 
    } 

})

// Education 

let Education_area_one = document.getElementById('Education_area_one') 
let Education_area_two = document.getElementById('Education_area_two')


document.addEventListener('scroll', function(){ 

    // one

    if(scrollPostion > Education_area_one.offsetTop - 300 && scrollPostion < Education_area_one.offsetTop){
        Education_area_one.style.animationName = 'EducationFadeIn' 
        setTimeout(ChangeOpacity(Education_area_one, Education_area_one.offsetTop - 300, Education_area_one.offsetTop), 1200) 
    } else {
        Education_area_one.style.animationName = 'EducationFadeOut' 
        Education_area_one.style.opacity = 0
    } 
    
    // two work on this 

    if(scrollPostion > Education_area_two.offsetTop - 250 && scrollPostion < Education_area_two.offsetTop + 250){
        Education_area_two.style.animationName = 'EducationFadeIn' 
        setTimeout(ChangeOpacity(Education_area_two, Education_area_two.offsetTop - 250, Education_area_two.offsetTop + 250), 1200) 
    } else {
        Education_area_two.style.animationName = 'EducationFadeOut'  
        Education_area_two.style.opacity = 0
    } 
})


document.addEventListener('scroll', function(){
    if(scrollY >= 390)
    {
        document.getElementById('second_nav').style.display = 'flex' 
        document.getElementById('second_nav_bar').style.display = 'block'

    } else if(scrollY < 390)
    {
        document.getElementById('second_nav').style.display = 'none' 
        document.getElementById('second_nav_bar').style.display = 'none'
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



document.addEventListener('scroll', function(){   

    let newHight = (document.body.scrollHeight - 690) / 100 
    let length = scrollY / newHight
    document.getElementById('second_nav_bar').style.width = `${length}%`
}) 

// global funations 


