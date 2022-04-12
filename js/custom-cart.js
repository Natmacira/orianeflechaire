window.addEventListener( 'DOMContentLoaded', function () {

    let updateCart = document.querySelector( 'button[name="update_cart"]' );
    let inputQty   = document.querySelector( 'input.input-text.qty' );

    if ( inputQty && updateCart ) {
        inputQty.addEventListener( 'change', function() {
            updateCart.click();
        } );
    }
});
