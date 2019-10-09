$(document).ready(function(){
var $name = $('#name');
var $email = $('#email');
var $country = $('#country');
var $skill = $('#skill');
var $price = $('#price');
var $description = $('#description');

let path = $(location).attr('pathname');
    console.log(path);
    //get request
    $.ajax({
        type:'GET',
        url:'/freelancer',
        success: function(data){
            for(let i = 0; i < data.length; i++){
                let list =  '<tr><td>'+data[i].id+'</td>';
                list += '<td>'+data[i].name+'</td>';
                list += '<td>'+data[i].email+'</td>';
                list += '<td>'+data[i].country+'</td>';
                list += '<td>'+data[i].skill+'</td>';
                list += '<td>'+data[i].price+'</td>';
                list += '<td>'+data[i].description+'</td>';
                list += '<td>'+'<a href="view.html?id='+data[i].id+'" class="btn btn-primary" id="view-button">view</a>'+'</td>';
                list += '<td>'+'<button  class="btn btn-danger delete" value='+data[i].id+' id="delete-button">Book</button>'+'</td></tr>';
               
                $('table tbody').append(list);
        }
    }
})

//post request
$('#signup-button').on('click', function(){
    var freelancer ={
        name:$name.val(),
        email:$email.val(),
        country:$country.val(),
        skill:$skill.val(),
        price:$price.val(),
        description:$description.val(),

    }
    $.ajax({
        type:'POST',
        url: '/freelancer',
        ContentType:'application/json',
        data:freelancer,
        success: function(newData){
            $data.append('<td>'+newData.name+'</td>',
            '<td>'+newData.email+'</td>',
            '<td>'+newData.country+'</td>',
            '<td>'+newData.skill+'</td>',
            '<td>'+newData.price+'</td>',
            '<td>'+newData.description+'</td>' 
        )
        },
        error:function(){
            alert('error loading data');
        }
    })
})
//view individual profile
if(path === "/view.html"){
    console.log(path)
        const url = window.location.href;
        const urlArray = url.split("id=");
        let id = urlArray[1];
        id = parseInt(id);

       $.get(`/freelancer/${id}`, function(data){
           console.log(data);

           $("#name").html(data.name);
           $("#email").html(data.email);
           $("#country").html(data.country);
           $("#price").html(data.price);
           $("#description").html(data.description);
           $("#update-div").html('<a href="update.html?id='+data.id+'" class="btn btn-warning" id="update-button">UPDATE</a>');
           
    })

    } 


})