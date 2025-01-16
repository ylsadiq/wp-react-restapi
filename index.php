<?php

get_header(); ?>

<!-- root react component -->
<div id="root"></div>
<!-- end root react component -->

<?php if (have_posts()) {
  while(have_posts()) {
    the_post(); ?>
  <?php }
}

get_footer();