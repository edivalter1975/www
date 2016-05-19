
    var input = document.querySelector("#input");
		var addTodo = document.querySelector("#addTodo");
			var montrerTodo = document.querySelector("#montrerTodo");
				var btn_Todo = document.querySelector("#btn_Todo");
					var effacer = document.querySelector("#effacer");
  

  
(function () {
    "use strict";
	
	initialisation();
	
    input.onkeypress = function (e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13') {
            if(input.value.trim() != ""){
				ajouterTodo(input.value.trim());				
			}
            input.value = "";
            return false;
        }
    };






    function ajouterTodo(todoTexte) {
        todoTexte = todoTexte || 'Chose à faire';
        var todo = document.createElement("article");
        todo.innerHTML = '<input type="checkbox" class="checkbox">' +
            '<div class="text" tabindex="0" contenteditable="true">' + todoTexte + '</div>' +
            '<img src="delete.png" alt="delete" tabindex="0" >';
        var img = todo.querySelector('img'),
            checkbox = todo.querySelector('input'),
            div = todo.querySelector('div');
        div.onkeypress = function (e) {
            if (!e) e = window.event;
            var keyCode = e.keyCode;
            if (keyCode == '13') {
                var rac = this.parentNode.nextElementSibling;
                if (rac)
                    rac.querySelector("div").focus();
                else if (this.parentNode.parentNode.nextElementSibling) {
                    console.log((this.parentNode).parentNode.nextElementSibling);
                    var article = this.parentNode.parentNode.nextElementSibling.querySelector("article");
                    if (article) {
                        article.querySelector("div").focus()
                    } else {
                        input.focus();
                    }
                } else
                    input.focus();
                return false;
            }
        };
		
		
		
		
	
		
        checkbox.onchange = function () {
            checkbox_onchange(this, todo);
        };
        checkbox.onkeypress = function (e) {
            if (!e) e = window.event;
            var keyCode = e.keyCode || e.which;
            if (keyCode == '32') {
                checkbox_onkeypress(this,todo);
                return false;
            }
            if (keyCode == '13') {
                checkbox_onkeypress(this,todo);
                return false;
            }

        };
        img.onclick = function () {
            deleteTodo(this);
        };
        img.onkeypress = deleteTodoOnEnter;
        addTodo.insertBefore(todo, addTodo.firstChild);

        disableTodo();
		dataUpdated();
        
    }
	
	

    function checkbox_onkeypress(checkbox,todo) {
        if(checkbox.checked)
		{checkbox.checked = false}

			else{checkbox.checked = true;}
			
        checkbox_onchange(checkbox, todo);
		dataUpdated();
    }
	
	
	
    function deleteTodo(img) {
        var rac = img.parentNode.nextElementSibling;
        if (rac)
            rac.querySelector("img").focus();
        else if (img.parentNode.parentNode.nextElementSibling) {
            
            var article = img.parentNode.parentNode.nextElementSibling.querySelector("article");
            if (article) {
                article.querySelector("img").focus()
            } else {
                if(img.parentNode.parentNode.childNodes.length >1){
                    img.parentNode.parentNode.childNodes[img.parentNode.parentNode.childNodes.length-2].querySelector("img").focus();
                }else{
                    input.focus();
                }
            }
        } else{
            if(montrerTodo.childNodes.length >1){
                montrerTodo.childNodes[montrerTodo.childNodes.length-2].querySelector("img").focus();
            }
            else if(addTodo.childNodes.length >1){
                addTodo.lastChild.querySelector("img").focus();
            }else{
                input.focus();
            }

        }

        img.parentNode.outerHTML = "";

		dataUpdated();
    }

    function deleteTodoOnEnter(e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13') {
            deleteTodo(this);
	disableTodo();
    effacerTodo();
	dataUpdated();
            return false;
        }
    }


	
	
	
	   function checkbox_onchange(checkbox, todo) {
        checkbox.checked ? montrerTodo.insertBefore(todo, montrerTodo.firstChild) : addTodo.appendChild(todo);
		dataUpdated();
           }
	
	 function disableTodo() {
        addTodo.childNodes.length == 0 ? btn_Todo.disabled = true  :  btn_Todo.disabled = false;
        
    }
	
	
	
	


    btn_Todo.addEventListener("click", function () {
        var checkboxes = addTodo.querySelectorAll("input");
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].click();
			
        }
    });
	
	
	
    effacer.onclick = function () {
        var delimg = montrerTodo.querySelectorAll("img");
        for (var i = 0; i < delimg.length; i++) {
            deleteTodo(delimg[i]);
			
        }
		dataUpdated();
    };
	
	function dataUpdated()	{
		var listeAfaire=[];
		var listeDejaFaite=[];
		for (let i = 0; i < addTodo.children.length; i++)
           {
               listeAfaire.unshift(addTodo.children[i].querySelector("div").textContent);  
           }
            for (let i = 0; i < montrerTodo.children.length; i++)
           {
               listeDejaFaite.unshift(montrerTodo.children[i].querySelector("div").textContent);  
           }
        localStorage.setItem('listeAfaire', JSON.stringify(listeAfaire));
        localStorage.setItem('listeDejaFaite', JSON.stringify(listeDejaFaite));
	}
	
	
	
	function initialisation(){     
    var listeAfaire = JSON.parse(localStorage.getItem('listeAfaire'));
    var listeDejaFaite = JSON.parse(localStorage.getItem('listeDejaFaite'));
        for (var i in listeAfaire)
           {
                ajouterTodo(listeAfaire[i]);
           }
        for (var i in listeDejaFaite)
           {
            ajouterTodo(listeDejaFaite[i]);
            addTodo.firstChild.querySelector("input").click();   
           }
        document.documentElement.className = localStorage.getItem("skin");
   }
    
btnSelect.onclick = function () {
            changerSkin(btnSelect.value);
        };
function changerSkin(skin){
    document.documentElement.className = skin;
    localStorage.setItem("skin",skin);
    
}
 function parseQueryString(qstr)
    {
            var query = {};
            var parameters = qstr.substr(1).split('&');
            for(var i = 0; i < parameters.length; i++)
            {
                var keyAndValue = parameters[i].split('=');
                var key = decodeURIComponent(keyAndValue[0]);
                var value = decodeURIComponent(keyAndValue[1] || '')
                query[key] = value;
            }
            return query;
    }

 if("onhashchange" in window){
     document.documentElement.className = parseQueryString(location.search)["skin"];
 }

   
})();
