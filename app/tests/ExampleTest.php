<?php

class ExampleTest extends TestCase {

    public function testGeneratesAnchorTag()
    {
        $actual = link_me_to('dogs/1', 'Show Dog');
        $expect = '<a href="http://localhost/dogs/1">Show Dog</a>';

        $this->assertEquals($expect, $actual);
    }

    public function testApplyAttributes()
    {
        $actual = link_me_to('dogs/1', 'Show Dog', ['id' => 'testId', 'class' => 'testClass']);
        $expect = '<a href="http://localhost/dogs/1" id="testId" class="testClass">Show Dog</a>';

        $this->assertEquals($expect, $actual);
    }

}