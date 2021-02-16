$(() => 
{
		new Splide("#imageSlider",
            {
                type   : 'loop',
                perPage: 1,
                autoHeight: true,
            }
        ).mount();
});