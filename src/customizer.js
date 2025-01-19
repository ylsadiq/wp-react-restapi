( function( $ ) {
    'use strict';

    // Live preview for logo
    wp.customize( 'header_logo', function( value ) {
        value.bind( function( newval ) {
            // Update logo in preview
            $('.site-logo img').attr('src', newval);
            
            // Dispatch event for React
            const event = new CustomEvent('logoUpdate', { 
                detail: { newLogo: newval } 
            });
            document.dispatchEvent(event);
        });
    });

} )( jQuery );