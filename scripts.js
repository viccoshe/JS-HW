window.addEventListener('DOMContentLoaded', function () {
    const toDoList = function () {

        const container = document.querySelector('.todo-container');
        const form = document.querySelector('form');
        const div = document.querySelector('.todo');
        const save = document.querySelector('.save');
        const clear = document.querySelector('.clear');
        const ul = document.createElement('ul');
        ul.classList.add('to-do-list');
         
        form.addEventListener('submit', function(e) {
            e.preventDefault()
            const input = document.querySelector('input');

            if (!input) return;
            if(!input.value) return;

            const li = addToDo(input.value);

            ul.append(li);
            div.append(ul);
            input.value = '';
        });

        //adding tasks by user
        addToDo = function (text) {
            let li = document.createElement('li');
            li.classList.add('li');
            let span = document.createElement('span');
            span.classList.add('text');
            span.innerText = text;
            let btn = document.createElement('button');
            btn.classList.add('remove-item');
            btn.innerText = 'Remove';
            let chkbox = document.createElement('input');
            chkbox.setAttribute('type', 'checkbox');

            li.append(chkbox, span, btn);
            return li;
        }

        //saving tasks
        saveToDo = function () {
            localStorage.setItem('todo', ul.innerHTML);
        }
        save.addEventListener('click', saveToDo);

        if(localStorage.getItem('todo')) {
            ul.innerHTML = localStorage.getItem('todo');
            div.append(ul);
        }
        clear.addEventListener('click', function() { //clearing all the tasks
            localStorage.removeItem('todo');
            ul.innerHTML = '';
        });

        ul.addEventListener('click', function(event) { 
            if (event.target.tagName === 'INPUT') 
                event.target.nextElementSibling.classList.toggle('complete'); 
            
            if (event.target.classList.contains('remove-item'))
                event.target.parentElement.remove();
        });
    }

    toDoList();
});