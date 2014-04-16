<?php namespace Pangea\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Response;

class TestController extends Controller {
        
        /**
         * Show listing
         * 
         * @return \Pangea\Controllers\Response
         */
        public function index()
        {
                return new Response('GET listing');
        }
        
        /**
         * Show form for creating a new item
         * 
         * @return \Pangea\Controllers\Response
         */
        public function create()
        {
                return new Response('GET show create form');
        }
        
        /**
         * Store an item
         * 
         * @return \Pangea\Controllers\Response
         */
        public function store()
        {
                return new Response('POST store item');
        }
        
        /**
         * Show item
         * 
         * @return \Pangea\Controllers\Response
         */
        public function show()
        {
                return new Response('GET show item');
        }
        
        /**
         * Show form for updating an item
         * 
         * @return \Pangea\Controllers\Response
         */
        public function edit()
        {
                return new Response('GET edit item');
        }
        
        /**
         * Update an item
         * 
         * @return \Pangea\Controllers\Response
         */
        public function update()
        {
                return new Response('PUT update item');
        }
        
        /**
         * Delete an item
         * 
         * @return \Pangea\Controllers\Response
         */
        public function destroy()
        {
                return new Response('DELETE delete item');
        }
        
}

