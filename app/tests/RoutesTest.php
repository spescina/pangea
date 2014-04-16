<?php namespace Pangea\Tests;

class RoutesTest extends \TestCase {

        /** @test */
        public function it_calls_module_listing_route()
        {
                $this->call('GET', 'test');

                $this->assertResponseOk();
        }

        /** @test */
        public function it_calls_module_show_create_form_route()
        {
                $this->call('GET', 'test/create');

                $this->assertResponseOk();
        }

        /** @test */
        public function it_calls_module_create_route()
        {
                $this->call('POST', 'test');

                $this->assertResponseOk();
        }

        /** @test */
        public function it_calls_module_show_route()
        {
                $this->call('GET', 'test/1');

                $this->assertResponseOk();
        }

        /** @test */
        public function it_calls_module_show_edit_form_route()
        {
                $this->call('GET', 'test/1/edit');

                $this->assertResponseOk();
        }

        /** @test */
        public function it_calls_module_edit_route()
        {
                $this->call('PUT', 'test/1');

                $this->assertResponseOk();
        }

        /** @test */
        public function it_calls_module_delete_route()
        {
                $this->call('DELETE', 'test/1');

                $this->assertResponseOk();
        }

}
