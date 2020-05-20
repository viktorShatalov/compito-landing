<?php 

/* Шорткод для вывода слайдера Ландшафтное освещение */
add_shortcode( 'slider_one', 'slider_one_foo' );
function slider_one_foo(){
	ob_start(); ?>
	<div class="left">
		<div class="ligth_slider-for">
<?php
	$array = carbon_get_theme_option('land_slider');
		foreach ($array as $value): ?>
			<div class="slider__img">
                    <img src="<?php echo $value['slide']; ?>" alt="монтаж ландшафтное освешение">
            </div>
        <?php endforeach; ?>
        </div>
        <div class="ligth_slider-nav">
        <?php foreach ($array as $value): ?>
			<div class="slider__img">
                    <img src="<?php echo $value['slide']; ?>" alt="монтаж ландшафтное освешение">
            </div>
        <?php endforeach; ?>
        </div>    
    </div>
<?php 
	return ob_get_clean();
}

/* Шорткод для вывода слайдера Реализованные проекты */ 
add_shortcode( 'slider_two', 'slider_two_foo' );
function slider_two_foo(){
	ob_start();
	$array = carbon_get_theme_option('project_slider');
	foreach ($array as $value): ?>
		<div class="slider__img">
            <img src="<?php echo $value['slide']; ?>" alt="монтаж автополива">
        </div>
    <?php endforeach;
    return ob_get_clean();    
}

/* Шорткоды для галереии готовых проектов */ 
add_shortcode( 'work', 'work_foo' );
function work_foo($atts){
    ob_start();
    $array = carbon_get_theme_option($atts['data']);
    foreach ($array as $value): ?>
        <a href="#">
            <img src="<?php echo $value['photo']; ?>" alt="Установка систем автополива">
        </a>
    <?php endforeach;
    return ob_get_clean();    
}                  