// Initial todos. For now, hard code this, should get this state from persistent storage later.
var todos = [
  {
    id: 1,
    text: 'learn javascript',
    complete: false
  },
  {
    id: 2,
    text: 'eat pizza',
    complete: true
  }
];

// Increment global ID so they are unique.
var id = todos.length;
function incrementId() {
  id++;
  return id;
}

function renderTodos() {

  $('.todos').html('');

  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    var checked = todo.complete ? 'checked' : '';

    $('.todos').append("<li class='todo' data-id=" + todo.id + "><label><input class='toggle-todo' type='checkbox' " + checked + "/> " + todo.text + "</label></li>");



    //clears input on form submit
    $('input[type="text"], textarea').val('');
    //http://stackoverflow.com/a/14589253
  }
}


function findById(id) {
  var todo;

  for(var i = 0; i < todos.length; i++) {
    if (todos[i].id === Number(id)) {
      todo = todos[i];
    }
  }
  return todo;
}

$(document).ready(function() {

  // Initialize with any existing todos.
  renderTodos();

  // Bind to input update to mark todo as complete.
  $(document).on('change', '.toggle-todo', function(event) {
    var id = $(event.target).parent().parent().data('id');
    var todo = findById(id);

// this was working in the console...but can't get it to work now.
//     $('[type="checkbox"]:not(:checked)').click(function(e){
//       $(this).parent().toggleClass('completed-todo');
//     event.stopPropagation()
//     });


    todo.complete = event.target.checked;

    renderTodos();
  });

  //Bind to new todo form submission to create new todos.
  $(document).on('submit', '.new-todo', function(event) {
    event.preventDefault();
    var text = $('.todo-text').val();


//js form validation
    if (text.length <= 0) {
      $('input.todo-text').attr('placeholder', 'Todo cannot be empty.');
      return false;
    } else {
      $('input.todo-text').attr('placeholder', '');
      // return true;
    }
//http://stackoverflow.com/a/3937551


//   $(input:checked).on('change', 'input[type="checkbox"]' function {
//   if (this.checked) {
//
// });


// if $('input:checked') {
//   $(this).parent().css('text-decoration', 'line-through');
// }

// $('input[type="checkbox"]:checked').change(function() {
//     console.log('hey');
// });

// if ( 'input:checked' ) {
//   //$( 'li.todo input' ).toggleClass('amc');
//   console.log('hey');
// }


// $('input.toggle-todo:checked').each(function() {
//     $(this.checked).parent().toggleClass('completed-todo');
// });

// if ( $('[type="checkbox"]').is('checked') ), function(e){
//     $(this).closest('label').toggleClass("completed-todo");
// event.stopPropagation();
// });

// $('[type="checkbox"]:checked').parent().toggleClass('completed-todo');


// $('input:not(:checked)').on('change', function(e){
//   $(this).parent().toggleClass('completed-todo');
// event.stopPropagation()
// });
// $('input:checked').on('change', function(e){
//   $(this).parent().toggleClass('completed-todo');
// event.stopPropagation()
// });





    var newTodo = {
      id: incrementId(),
      text: text,
      completed: false
    };

    todos.push(newTodo);

    renderTodos();
  });

});
