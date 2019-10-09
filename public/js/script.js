$(document).ready(function(){
var $name = $('#name');
var $email = $('#email');
var $country = $('#country');
var $skill = $('#skill');
var $price = $('#price');
var $description = $('#description');


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


})