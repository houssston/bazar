$(document).ready(function(){	
	var stars = $('.product__rating span');

	bindClickListener(stars);

	function bindClickListener(stars){	
		stars.click(function(e) {
			let clickedBlockStars = e.currentTarget.parentElement.children;
			let clickedStar=e.currentTarget;			
			$(clickedBlockStars).removeClass('fas fa-star').addClass("far fa-star");
			for(i=0; i<clickedBlockStars.length; i++){
				let star = clickedBlockStars[i];			
				$(star).removeClass('far fa-star').addClass("fas fa-star");	
				if(star===clickedStar){
					break;
				}	
			}		
		});
	}
})