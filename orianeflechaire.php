<?php
/**
 * Plugin Name: Oriane Flechaire
 * Version:     1.0.2
 * Description: Customizaciones para el sitio orianeflechaire.com
 * Author:      Natalia Ciraolo and Josefina Lucía
 * License:     GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

define( 'ORIANE_FLECHAIRE_VERSION', '1.0.2' );

add_action( 'init', function() {
    wp_enqueue_style( 'oriane_flechaire_styles', '/wp-content/plugins/orianeflechaire/style.min.css', 
    array(), ORIANE_FLECHAIRE_VERSION );
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
