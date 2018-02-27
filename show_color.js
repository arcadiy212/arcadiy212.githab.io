function $(id)  { return document.getElementById(id)
                }
function myF2() { clearTimeout(stop) 
                }
function Show() {                        
						   var res = '#' + ($("fIn").value * 1).toString(16)	
	                       $("styl").style.backgroundColor = res
						   $("fOut").innerHTML = res
                }
	                        num = 0x111111               						
function myF()  {                            						   
		                    stop = setTimeout(myF,1100)
                            j=25
                             for (i=1;i<19;i++)
                               {	 
   				                 num = num + 0x18c7f 
			                       result = '#' + num.toString(16)
		                           $(i).style.color = result
			                     $(j).innerHTML = result
				                j++
			                   }
                                 if (num > 0xffffff) num=0x111111
                }

   
function randomWords(){
                        var words1 = getStoreArray("friends")
                        var words2 = ["dresses","deals","love","call","not sensitive","controls","advises","come","calling","covers","love","take","tempt","sends","hides","use","call","not ringing","likes","mumble","call","not coming inn","not ringing","no covers","neutural"]
                        var words3 = getStoreArray("friends")
                        var words4 = ["airy", "slender", "average", "democratic", "good", "terrestrial", "emotional", "strange", "unpleasant","thick", "smooth", "affectionate", "proud", "harsh", "healthy", "optimal", "in love", "inclined", "single", "grateful","equal", "elevated", "difficult", "sweet","in love","slippery", "literate", "lazy"]
                        var words5 = getStoreArray("friends")
						var words6 = ["asks", "influences", "likes","dresses", "communicates" ,"embraces", "offends", "rules" ,"advises", "arrives" ,"covers", "selects" ,"persuades","sends", "uses", "guesses", "laughs", "appears", "guesses", "looks", "laughs", "mutters", "calls"]
                        var words7 = ["brain", "gold", "leadership", "reality", "success", "man", "turn", "car","buddy" ,"truth", "gates", "influence", "foundation", "protection" ,"uncle" ,"rest,", "children"]
                        var rand1 = Math.floor(Math.random() * words1.length)
                        var rand2 = Math.floor(Math.random() * words2.length)
                        var rand3 = Math.floor(Math.random() * words3.length) 
                        var rand4 = Math.floor(Math.random() * words4.length)
                        var rand5 = Math.floor(Math.random() * words5.length)
                        var rand6 = Math.floor(Math.random() * words6.length) 
                        var rand7 = Math.floor(Math.random() * words7.length) 
						
                        var phrase =  words1[rand1] + " " + words2[rand2] + " " + words3[rand3] + " " + words4[rand4] + " " + words5[rand5] + " " + words6[rand6] + " " + words7[rand7]
                        var phraseElement = $("phrase")
                            phraseElement.innerHTML = phrase
                      }
                            window.onload = randomWords


                      window.onload = init
function init() {
                  var button = $("addButton")
                      button.onclick = handleButtonClick
                      loadFriends()
                }
function handleButtonClick() {

                               var textInput = $("friendsTextInput")
							   
                               var friendName = textInput.value

                               var li = document.createElement("li")

                                   li.innerHTML = friendName

                               var ul = $("friends")

                                   ul.appendChild(li)
  
                                   save(friendName)
                              } 

 function save(item){                    
                         var  friendsArray = getStoreArray("friends")
                              friendsArray.push(item)
                              localStorage.setItem("friends", JSON.stringify(friendsArray))
                    }
					
function loadFriends(){
                          var friendsArray = getStoreArray("friends")
                          var ul = $("friends")
	  
                              if (friendsArray != null)
                              {
                                  for (var i = 0; i < friendsArray.length; i++)
                                  {
                                     var li = document.createElement("li")

                                         li.innerHTML = friendsArray[i]

                                         ul.appendChild(li)
                                  }
                              }
                      }

function getStoreArray(key){
                              var friendsArray = localStorage.getItem(key)

                                  if (friendsArray == null || friendsArray == "")
                                  {
                                    friendsArray = new Array()
                                  }
                                    else { friendsArray = JSON.parse(friendsArray)}

                               return friendsArray
                           }
function removeArray(){ 
                        friendsArray = []
                        localStorage.setItem("friends", JSON.stringify(friendsArray))
                        location.reload() 
                      }


function mirage(id)  {
                       var bloc = $(id)
                           bloc.style.display = 'table'
                       var input = $("disp")
                           input.style.display = 'none'
                     }		
function nomirage(id){
                       var non = $(id)
                           non.style.display = 'none'
                       var input = $("disp")
                           input.style.display = 'table'
                     }

function mirage2(id) {
                       var bloc = $(id)
                           bloc.style.display = 'table'
                       var input = $("disp2")
                           input.style.display = 'none'
                     }		
function nomirage2(id){
                       var non = $(id)
                           non.style.display = 'none'
                       var input = $("disp2")
                           input.style.display = 'table'
                      }

  p=m=n=z=0
 function eruDit()
                  {
                    var vopros = ["How many continents on Earth", "How many planets in the solar system", "The brick weighs 1 kilogram and half of the brick, how much one brick weighs (kg)", "In what year did World War I begin", "In what year did the Panama Canal open", "How many states border Ukraine" ,"The Depth of the Mariana Trench (km)","Maximum depth of the Sea of ​​Azov (meters)" ,"Nuremberg process (year)", "How many continents are washed by the Pacific Ocean",
                	              "In what year the NATO bloc was created","The lowest temperature recorded on the ground" ,"In which year the first car was invented","Unification of Germany (year)","In what year did the great depression begin", "In what year the first helicopter was invented" ,"Nuclear explosions in Herasim and Nagasaki (year)",
                                  "Maximum depth of Lake Baikal (meters)","The first flight of Gagarin into space (year)", "In what year the USSR fell apart", "In which year on the moon astronauts landed", "In what year the first PC (IBM) appeared","In what year the first locomotive appeared","The highest peak on earth (meters)", "Angel Falls (meters)", "Distance to the moon (apogee, thousand km)", "Distance to the moon (perigee, thousand km)", "Thank you ... "]
	                var otvet = [6,8,2,1914,1914,7,11,14,1945,5,1949,-89,1885,1990,1929,1936,1945,1620,1961,1991,1969,1984,1803,8848,979,406,356 ]
		
		         var x = vopros[p+1]
				  $('wan').innerHTML = x					
                   var y = $('enter').value	  						
				     y == otvet[p] ?	m++ : n++ 			 
				       var result_ok = 'correct answers:' + m 
			           var result_no = 'wrong answers :' + n				
			         $('previous').innerHTML = otvet[p]				
                   $('result_ok').innerHTML = result_ok					
			    $('result_no').innerHTML = result_no				    
                    p++					
		         if (p == vopros.length-1) p=0
		
                  }