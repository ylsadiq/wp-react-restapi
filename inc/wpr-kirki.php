<?php
// functions.php or your customizer file

class Secondtry_Customizer {
    public function __construct() {
        add_action('init', array($this, 'setup_customizer_settings'));
        add_action('customize_preview_init', array($this, 'customize_preview_js'));
    }

    public function setup_customizer_settings() {
        // Panel
        new \Kirki\Panel(
            'secondtry_panel',
            [
                'priority'    => 10,
                'title'       => esc_html__('Blocktheme18 Options', 'secondtry'),
            ]
        );

        // Section
        new \Kirki\Section(
            'secondtry_header_logo_section',
            [
                'title'       => esc_html__('Header Logo', 'secondtry'),
                'panel'       => 'secondtry_panel',
                'priority'    => 160,
            ]
        );

        // Logo Field
        new \Kirki\Field\Image(
            [
                'settings'    => 'header_logo',
                'label'       => esc_html__('Header Logo', 'secondtry'),
                'section'     => 'secondtry_header_logo_section',
                'default'     => get_template_directory_uri() . '/src/Assets/images/logo.png',
                'transport'   => 'postMessage',
                'option_type' => 'theme_mod',
                'choices'     => [
                    'save_as' => 'url',
                ],
            ]
        );
    }

    // Add live preview script
    public function customize_preview_js() {
        wp_enqueue_script(
            'secondtry-customizer',
            get_template_directory_uri() . '/src/customizer.js',
            ['jquery', 'customize-preview'],
            '1.0',
            true
        );
    }
}

// Initialize the customizer
new Secondtry_Customizer();

// Add REST API endpoint for the logo
function secondtry_register_rest_routes() {
    register_rest_route('secondtry/v1', '/logo', array(
        array(
            'methods'             => 'GET',
            'callback'           => 'secondtry_get_logo_rest',
            'permission_callback' => '__return_true'
        )
    ));
}
add_action('rest_api_init', 'secondtry_register_rest_routes');

// REST API callback function
function secondtry_get_logo_rest() {
    $logo = secondtry_custom_logo(); // Using your existing function
    
    return new WP_REST_Response(array(
        'success' => true,
        'logo_url' => $logo
    ), 200);
}

// Add logo to header.php or your React component template
function secondtry_custom_logo() {
    $logo = get_theme_mod('header_logo', get_template_directory_uri() . '/src/Assets/images/logo.png');
    return $logo;
}