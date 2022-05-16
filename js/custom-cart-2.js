window.addEventListener( 'DOMContentLoaded', function () {
    let localPickup = document.querySelector( 'input[value="local_pickup:9"]' );
    let heading     = document.querySelector( '.woocommerce-billing-fields h3' );
    

    if ( localPickup && heading ) {
        if ( localPickup.checked ) {
            heading.innerText = 'Facturación';
            document.body.classList.add( 'pickup' );
        } else {
            heading.innerText = 'Facturación y envío';
            document.body.classList.remove( 'pickup' );
        }

        localPickup.addEventListener( 'change', function() {
            if ( localPickup.checked ) {
                heading.innerText = 'Facturación';
                document.body.classList.add( 'pickup' );
            } else {
                heading.innerText = 'Facturación y envío';
                document.body.classList.remove( 'pickup' );
            }
        } );
    }

    let observer = new MutationObserver( mutations => {

		for ( let mutation of mutations ) {

			for( let node of mutation.addedNodes ) {
				if (!(node instanceof HTMLElement)) continue;

				let localPickup = document.querySelector( 'input[value="local_pickup:9"]' );
                let heading     = document.querySelector( '.woocommerce-billing-fields h3' );
                

                if ( localPickup && heading ) {
                    if ( localPickup.checked ) {
                        heading.innerText = 'Facturación';
                        document.body.classList.add( 'pickup' );
                    } else {
                        heading.innerText = 'Facturación y envío';
                        document.body.classList.remove( 'pickup' );
                    }

                    localPickup.addEventListener( 'change', function() {
                        if ( localPickup.checked ) {
                            heading.innerText = 'Facturación';
                            document.body.classList.add( 'pickup' );
                        } else {
                            heading.innerText = 'Facturación y envío';
                            document.body.classList.remove( 'pickup' );
                        }
                    } );
                }
			}
		}
	} );

	let demoElem = document.getElementById( 'order_review' );

	if ( demoElem ) {
		observer.observe(demoElem, {childList: true, subtree: true});
	}
});
