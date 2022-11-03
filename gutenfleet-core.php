<?php 
    /**
     * Plugin Name: Gutenfleet
     * Description: Complete gutenberg page builder plugin
     * 
     */

     function gutenfleet_core_script_register(){
          wp_register_script( 'gutenfleet-block-js', plugin_dir_url(__FILE__).'/container/block.build.js', array('wp-element', 'wp-blocks', 'wp-components', 'wp-i18n','wp-editor'));
          register_block_type('gutenfleet/container-block', array(
               'editor_script' => 'gutenfleet-block-js'
          ));
     }
     add_action('init', 'gutenfleet_core_script_register');

?>