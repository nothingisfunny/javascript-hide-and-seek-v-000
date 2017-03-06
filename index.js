	function getFirstSelector(selector){
		return document.querySelector(selector);
	}

	function nestedTarget(){
		return document.querySelector('#app #nested .target');
	}

	function increaseRankBy(n){
		const list = document.querySelectorAll('ul.ranked-list li')
		for (let i = 0, l = list.length; i < l; i++){
			list[i].innerHTML = parseInt(list[i].innerHTML) + n;
		}
	}

	function deepestChild(){
		return document.querySelector('#grand-node div div div div')
	}
	  
