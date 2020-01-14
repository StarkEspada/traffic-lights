var box = document.querySelector(".box");





class trafficLights{

	constructor(container, flashlight){
		this.container = document.querySelector(container);
		this.flashlight = document.querySelectorAll(flashlight)
		this.colors = ["red", "orange", "green"]
		this.color = null
		this.lamp = null
		this.currentColor = 0
		this.init();
	}


	changeColor(){
		function one(event){
			if(this.currentColor === this.colors.length -1){
			this.currentColor = 0
			} else {
			this.currentColor++
			}
		}
		setTimeout(one.bind(this), 1000)
	}

	setColor(){
		function two(event){
			this.color = this.colors[this.currentColor]
			this.lamp = this.container.children[this.currentColor]
			for (var i = 0; i < this.container.children.length; i++){
				this.container.children[i].className = ""
				this.container.children[i].classList.add("lamp")
			}
			this.lamp.classList.add(this.color)
		}
		setTimeout(two.bind(this), 1000)
	}

	start(){
		function start(event){
			this.changeColor()
			this.setColor()
		}
		setInterval(start.bind(this), 2000)
	}

	
	init(){
	this.start()
	}

}


var traffic = new trafficLights(".box",".empty",);








/*var box = document.querySelector(".box");





class trafficLights{

	constructor(container, flashlight){
		this.container = document.querySelector(container);
		this.flashlight = document.querySelectorAll(flashlight)
		this.colors = ["red", "orange", "green"]
		this.color = null
		this.lamp = null
		this.currentColor = 0
		this.init();
	}


	changeColor(){
		function one(typeOne, typeTwo){
			if(typeOne === typeTwo.length -1){
			typeOne = 0
			} else {
			typeOne++
			}
		}
		one(this.currentColor, this.colors)
		
	}

	setColor(){
		function two(typeOne, typeTwo, typeTree, typeFor, typeFive){
			typeOne = typeTwo[typeTree]
			typeFor = typeFive.children[typeTree]
			for (var i = 0; i < typeFive.children.length; i++){
				typeFive.children[i].className = ""
				typeFive.children[i].classList.add("lamp")
			}
			typeFor.classList.add(typeOne)
		}
		two(this.color, this.colors, this.currentColor, this.lamp, this.container)
	
	}

	start(){
		function start(event){
			this.changeColor()
			this.setColor()
		}
		setInterval(start.bind(this), 2000)
	}


	test(){
		function testOne(eventt){
			eventt.style.background = "blue"
		}
		testOne(this.container)
	}

	
	init(){
	this.start()
	this.test()
	}

}


var traffic = new trafficLights(".box",".empty",);*/