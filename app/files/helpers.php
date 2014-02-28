<?php

function link_me_to($link, $label, $parameters = null)
{
    $url = url($link);

    $attributes = $parameters ? HTML::attributes($parameters) : '';

    return '<a href="' . $url . '"' . $attributes . '>' . $label . '</a>';
}
