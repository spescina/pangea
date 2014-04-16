<?php

return array(

	'default' => 'sqlite',

	'connections' => array(

		'sqlite' => array(
			'driver'   => ':memory:',
			'database' => __DIR__.'/../database/production.sqlite',
			'prefix'   => '',
		),
                
	),

);
