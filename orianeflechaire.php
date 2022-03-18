<?php
/**
 * Plugin Name: Oriane Flechaire
 * Version:     1.0.3
 * Description: Customizaciones para el sitio orianeflechaire.com
 * Author:      Natalia Ciraolo and Josefina Lucía
 * License:     GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

define( 'ORIANE_FLECHAIRE_VERSION', '1.0.3' );

add_action( 'init', function() {
    wp_enqueue_style( 
		'oriane_flechaire_styles', 
		'/wp-content/plugins/orianeflechaire/style.min.css', 
    	array(), 
		ORIANE_FLECHAIRE_VERSION 
	);

	add_shortcode( 'oriane_custom_gallery', function() {
		wp_enqueue_script( 
			'oriane_custom_gallery_script', 
			'/wp-content/plugins/orianeflechaire/js/custom-gallery.js', 
			array( 'jquery' ), 
			ORIANE_FLECHAIRE_VERSION, 
			true 
		);

		return '<div id="oriane-custom-gallery-modal"><img id="oriane-custom-gallery-image" src="" />
			<button id="oriane-custom-gallery-close" class="oriane-custom-gallery-button">X</button>
			<button id="oriane-custom-gallery-next" class="oriane-custom-gallery-button"><i class="arrow right"></i></button>
			<button id="oriane-custom-gallery-prev" class="oriane-custom-gallery-button"><i class="arrow left"></i></button>
		</div>';
	} );
} );

/**
 * Automatically add Oriane's book to cart on visit.
 */
add_action( 'template_redirect', 'add_product_to_cart', 999 );

function add_product_to_cart() {
	if ( ! is_admin() ) {
		$product_id = 2449; // Oriane's book product ID.
		$found = false;
		
		// Check if product already in cart
		if ( sizeof( WC()->cart->get_cart() ) > 0 ) {
			foreach ( WC()->cart->get_cart() as $cart_item_key => $values ) {
				$_product = $values['data'];
				if ( $_product->get_id() == $product_id )
					$found = true;
			}
			// If product not found, add it
			if ( ! $found )
				WC()->cart->add_to_cart( $product_id );
		} else {
			// If no products in cart, add it
			WC()->cart->add_to_cart( $product_id );
		}
	}
}

add_filter( 'woocommerce_locate_template', 'replace_templates_via_plugin', 10, 3 );

function replace_templates_via_plugin( $template, $template_name, $template_path ) {
	$plugin_path = trailingslashit( plugin_dir_path( __FILE__ ) )  . '/templates/emails/';
	
	if ( file_exists( $plugin_path . basename( $template ) ) ){
		$template = $plugin_path . basename( $template );
	}

	return $template;
}

add_action( 'template_redirect', 'redirect_posts_to_cinco_meses' );

function redirect_posts_to_cinco_meses(){
    if ( is_singular( 'product' ) || is_page( 'tienda' ) ) {
		$cinco_meses_page = get_page_by_path( 'cinco-meses-de-infinito' );

		if ( $cinco_meses_page ) {
			wp_safe_redirect( get_the_permalink( $cinco_meses_page ), 301 );
			exit;
		}
	}
}

function replace_product_link( $post_link, $post ) {
    if ( 'product' == get_post_type( $post ) ) {
        return '';
    }

    return $post_link;
}

add_filter( 'post_type_link', 'replace_product_link', 10, 2 );