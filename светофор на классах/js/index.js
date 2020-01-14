

var box = document.querySelector(".box")




class trafficLights{
	constructor(container){
		this.circleRed = null;
		this.circleOrange = null;
		this.circleGreen = null;
		this.container = document.querySelector(container);
		this.init()
	}

	createCircleOne(typeRed){
			var circleOne = document.createElement("div")
			circleOne.classList.add(typeRed)
			this.circleRed = circleOne
			return circleOne

	}
	createCircleTwo(typeOrange){
		var circleTwo = document.createElement("div")
		circleTwo.classList.add(typeOrange)
		this.circleOrange = circleTwo
		return circleTwo
	}

	createCircleTree(typeGreen){
			var circleTree = document.createElement("div")
			circleTree.classList.add(typeGreen)
			this.circleGreen = circleTree
			return circleTree
	}

	addRed(){
			var circleOne = this.createCircleOne("white")
			this.container.appendChild(circleOne)
	}
	addOrange(){
			var circleTwo = this.createCircleTwo("white")
			this.container.appendChild(circleTwo)
	}
	addGreen(){
			var circleTree = this.createCircleTree("white")
			this.container.appendChild(circleTree)
	}

	colorChangeOne(){
		/*this.container.addEventListener("click", one.bind(this))*/
		function one(){
			this.circleRed.style.background = "red"
			this.circleGreen.style.background = "white"
		}
		setTimeout(one.bind(this), 3000)
	}
	colorChangeTwo(){
		function two(){
			this.circleRed.style.background = "white"
			this.circleOrange.style.background = "orange"
		}
		setTimeout(two.bind(this), 6000)
	}
	colorChangeTree(){
		function tree(){
			this.circleOrange.style.background = "white"
			this.circleGreen.style.background = "green"
		}
		setTimeout(tree.bind(this), 9000)
	}
	reStart(){
		function restart(){
			this.colorChangeOne()
			this.colorChangeTwo()
			this.colorChangeTree()
		}
		setInterval(restart.bind(this), 12000)
	}
	/*start(){
		setTimeout(this.colorChangeOne(), 1000);
		setTimeout(this.colorChangeTwo(), 3000);
		setTimeout(this.colorChangeTree(), 6000);
	}*/

	init(){
		this.addRed()
		this.addOrange()
		this.addGreen()
		this.colorChangeOne()
		this.colorChangeTwo()
		this.colorChangeTree()
		this.reStart()
	}
}


var trafficLig = new trafficLights(".box") 

