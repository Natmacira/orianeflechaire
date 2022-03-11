<?php
/**
 * Plugin Name: Oriane Flechaire
 * Version:     1.0.1
 * Description: Customizaciones para el sitio orianeflechaire.com
 * Author:      Natalia Ciraolo
 * License:     GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

define( 'ORIANE_FLECHAIRE_VERSION', '1.0.1' );


add_action( 'init', function() {
    wp_enqueue_style( 'oriane_flechaire_styles', '/wp-content/plugins/orianeflechaire/style.min.css', 
    array(), ORIANE_FLECHAIRE_VERSION );
} );

/**
 * Automatically add product to cart on visit
 */
add_action( 'template_redirect', 'add_product_to_cart', 999 );

function add_product_to_cart() {
	if ( ! is_admin() ) {
		$product_id = 2449; //replace with your own product id
		$found = false;
		//check if product already in cart
		if ( sizeof( WC()->cart->get_cart() ) > 0 ) {
			foreach ( WC()->cart->get_cart() as $cart_item_key => $values ) {
				$_product = $values['data'];
				if ( $_product->get_id() == $product_id )
					$found = true;
			}
			// if product not found, add it
			if ( ! $found )
				WC()->cart->add_to_cart( $product_id );
		} else {
			// if no products in cart, add it
			WC()->cart->add_to_cart( $product_id );
		}
	}
}

