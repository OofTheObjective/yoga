document.addEventListener('DOMContentLoaded', () => 
{
	const itemsCarousel = document.querySelectorAll('.carousel');
	M.Carousel.init(itemsCarousel,{
		duration:200,
		dist:-80,
		shift:5,
		padding:5,
		numVisible:3,
		indicators:true
	});
});