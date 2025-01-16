<?php
// Register Kirki Panel and Section
new \Kirki\Panel(
    'blocktheme18_panel',
    [
        'priority'    => 10,
        'title'       => esc_html__('Blocktheme18 Option', 'blocktheme18'),
        'description' => esc_html__('My Panel Description.', 'blocktheme18'),
    ]
);

function blocktheme18_header_logo_section() {
    // Section
    new \Kirki\Section(
        'blocktheme18_header_logo_section',
        [
            'title'       => esc_html__('Header Logo', 'blocktheme18'),
            'description' => esc_html__('My Header Section Description.', 'blocktheme18'),
            'panel'       => 'blocktheme18_panel',
            'priority'    => 160,
        ]
    );

    // Logo Field
    new \Kirki\Field\Image(
        [
            'settings'    => 'header_logo',
            'label'       => esc_html__('Header Logo', 'blocktheme18'),
            'description' => esc_html__('Please set your header logo', 'blocktheme18'),
            'section'     => 'blocktheme18_header_logo_section',
            'default'     => get_template_directory_uri() . '/src/Assets/images/logo.png',
            'choices'     => [
                'save_as' => 'url',
            ],
        ]
    );
}

// Initialize the section
add_action('init', 'blocktheme18_header_logo_section');

// Register REST API endpoint for the logo
function blocktheme18_register_rest_fields() {
    register_rest_route(
        'blocktheme18/v1',
        '/theme-logo',
        array(
            'methods'  => 'GET',
            'callback' => 'blocktheme18_get_theme_logo',
            'permission_callback' => '__return_true'
        )
    );
}
add_action('rest_api_init', 'blocktheme18_register_rest_fields');

// Callback function to get the logo URL
function blocktheme18_get_theme_logo() {
    $logo_url = get_theme_mod('header_logo', get_template_directory_uri() . '/src/Assets/images/logo.png');
    
    if (!$logo_url) {
        return new WP_Error(
            'no_logo',
            'No logo found',
            array('status' => 404)
        );
    }

    return array(
        'logo_url' => esc_url($logo_url)
    );
}

// Optional: Add to theme customizer preview
function blocktheme18_customize_preview_js() {
    wp_enqueue_script(
        'blocktheme18-customizer',
        get_template_directory_uri() . '/js/customizer.js',
        array('jquery', 'customize-preview'),
        '1.0.0',
        true
    );
}
add_action('customize_preview_init', 'blocktheme18_customize_preview_js');