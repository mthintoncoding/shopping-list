let state = {
  items: []
}

let index = 0;

function addItems(state, item){
  state.items.push(item);
  renderItems(state, index)
}

function renderItems(state, index){
  $('.shopping-list').empty();
  state.items.forEach(function(item){
    $('.shopping-list').append(
      `<li id="${index}">
      <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle"> <span class="button-label">check</span> </button>
          <button class="shopping-item-delete"> <span id="index-${index}"class="button-label">delete</span> </button>
        </div>
      </li>`)
  })
}

$('.shopping-list').on('click', 'li', function(event){
  let deleteIndex = parseInt(this.attr('id'))
  //use splice
  state.items.splice(deleteIndex, 1)
  this.closest('li').remove();
  renderItems(state);
})

$('#js-shopping-list-form').submit(function(event){
  event.preventDefault();
    var userInput = $('#shopping-list-entry').val();
    index++;
    addItems(state, userInput);
    $('#shopping-list-entry').val('');
  })
