(function () {
    "use strict";

    startVoix();
	startMenu();

    function startVoix() {
        var muet = localStorage.getItem('muet');
         var voix = document.querySelector("audio");
           var onOff = document.querySelector("#sourd");
            var label = document.querySelector("#label");

				if (muet == 'true') {
					voix.pause();
						onOff.checked = true;
							} else {
						voix.play()
					}
					
					    if (onOff.checked) {
                        label.title = "Désactiver la sourdine"
                         } else {
                        label.title = "Activer la sourdine"
                        }

       
        document.querySelector("#sourd").onclick = function () {
			
			if (onOff.checked) {
                        voix.pause();
                         } else {
                        voix.play();
                        }
			
			if (onOff.checked) {
                        label.title = "Désactiver la sourdine";
                         } else {
                        label.title = "Activer la sourdine";
                        }
        
            localStorage.setItem('muet', onOff.checked);
        };
    }
	
	

	
    function startMenu(){
        /*var contexte={
                projets:[
				{
					
					nom: "GitHub",
                    dir: "../GitHub/index.html"
                    
                },
                {
					nom: "Tutoriel",
                    dir: "../Tutoriel/index.html"
                    
                },
                {
					
					nom: "Pens",
                    dir: "../pens/index.html"
                    
                },
				 {
					
					nom: "Todo (Classique)",
                    dir: "../todo/index.html"
                    
                },
				 {
					
					nom: "Todo(<span style ='color:red'>blue-on-orange</span>)",
                    dir: "../todo/index.html?skin=blue-on-orange"
                    
                },
				 {
					
					nom: "Todo(<span style ='color:lime'>lime-on-white</span>)",
                    dir: "../todo/index.html?skin=lime-on-white"
                    
                },
                {
                    nom: "Home",
                    dir: "../home/index.html"
                },
                {
                    nom: "Langues",
                    dir: "../langues/index.html"
					
                },
				 {
                    nom: "Todo",
                    dir: "../todo/index.html"
                }		
		      ] 
            };*/
            
            jQuery.getJSON("projets.json").done(function(jsonData){
             console.log(JSON.stringify(jsonData,null,4));
                creerUl(jsonData);
            })
            .fail(function(){
            console.log("Impossible de charger le JSON");
            });  	
			function creerUl(jsonData) {
			  // Grab the template script
		  var theTemplateScript = document.querySelector("#templateScript").innerHTML;
		  // Compile the template
		  var theTemplate = Handlebars.compile(theTemplateScript);

		  // This is the default context, which is passed to the template
		  var context = jsonData;
		  
		  // Pass our data to the template
		  var theCompiledHtml = theTemplate(context);

		  var ul = document.querySelector("#li2");
		  
		 ul.innerHTML = theCompiledHtml;
		 
		 
		 
		  // Add the compiled html to the page
		//document.body.innerHTML+=(theCompiledHtml);
        }; 
	
		   	
			/*
            Menu = document.querySelector("#li2");
        for (var i = 0; i < projects.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = '<a href="../'+projects[i].dir+'/index.html"><span>' + projects[i].nom + '</span></a>';
            Menu.appendChild(li);
        }*/
    }
})();