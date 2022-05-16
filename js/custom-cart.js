window.addEventListener( 'DOMContentLoaded', function () {
    let updateCart = document.querySelector( 'button[name="update_cart"]' );
    let inputQty   = document.querySelector( 'input.input-text.qty' );

    if ( inputQty && updateCart ) {
        inputQty.addEventListener( 'change', function() {
            updateCart.click();
        } );
    }

    let localPickup    = document.querySelector( 'input[value="local_pickup:9"]' );
    let shippingMethod = document.getElementById( 'shipping_method' );

    if ( localPickup && shippingMethod ) {
        if ( localPickup.checked ) {
            shippingMethod.classList.remove( 'delivery' );
        } else {
            shippingMethod.classList.add( 'delivery' );
        }

        localPickup.addEventListener( 'change', function() {
            if ( localPickup.checked ) {
                shippingMethod.classList.remove( 'delivery' );
            } else {
                shippingMethod.classList.add( 'delivery' );
            }
        } );
    }

    let observer = new MutationObserver( mutations => {

		for ( let mutation of mutations ) {

			for( let node of mutation.addedNodes ) {
				if (!(node instanceof HTMLElement)) continue;

				let updateCart = document.querySelector( 'button[name="update_cart"]' );
                let inputQty   = document.querySelector( 'input.input-text.qty' );

                if ( inputQty && updateCart ) {
                    inputQty.addEventListener( 'change', function() {
                        updateCart.click();
                    } );
                }

                let localPickup    = document.querySelector( 'input[value="local_pickup:9"]' );
                let shippingMethod = document.getElementById( 'shipping_method' );
            
                if ( localPickup && shippingMethod ) {
                    if ( localPickup.checked ) {
                        shippingMethod.classList.remove( 'delivery' );
                    } else {
                        shippingMethod.classList.add( 'delivery' );
                    }
            
                    localPickup.addEventListener( 'change', function() {
                        if ( localPickup.checked ) {
                            shippingMethod.classList.remove( 'delivery' );
                        } else {
                            shippingMethod.classList.add( 'delivery' );
                        }
                    } );
                }
			}
		}

	} );

	let demoElem = document.getElementById( 'carrito-producto' );

	if ( demoElem ) {
		observer.observe(demoElem, {childList: true, subtree: true});
	}
});
