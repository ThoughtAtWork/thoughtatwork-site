<?php

namespace RIT\Prod\Nelnet;

class ConfigTest extends \PHPUnit_Framework_TestCase
{

    public function newNelnet()
    {
        $nelnet = new Nelnet();

        $nelnet->contact = "Joe Deer";
        $nelnet->contactEmail = "jdeer@email.com";

        return $nelnet;
    }

    public function testConfig()
    {
        $nelnet = $this->newNelnet();

        $this->assertEquals('Joe Deer', $nelnet->contact);
        $this->assertEquals('jdeer@email.com', $nelnet->contactEmail);
    }

    public function testInstance()
    {
        $nelnet = $this->newNelnet();

        // Test assert Instance of
        $this->assertInstanceOf('\RIT\Prod\Nelnet\Nelnet', $nelnet);
    }

    public function testMakeURL()
    {
        $nelnet = $this->newNelnet();
        $testURL = "/etctest/registration/confirmation";

        $_SERVER['HTTP_HOST'] = 'www-staging.rit.edu';
        $nelnet->addRedirectUrl($testURL);
        $expectedURL = "https://www-staging.rit.edu" . $testURL;

        $this->assertEquals($expectedURL, $nelnet->redirectUrl);

        $_SERVER['HTTP_HOST'] = 'www.rit.edu';
        $nelnet->addRedirectUrl($testURL);
        $expectedURL = "https://www.rit.edu" . $testURL;

        $this->assertEquals($expectedURL, $nelnet->redirectUrl);
    }

    public function testGetSuccessfulNelnetStatuses()
    {
        $nelnet = $this->newNelnet();
        $statuses = $nelnet->getSuccessfulStatuses();

        $this->assertTrue(count($statuses) > 1);

        foreach ($statuses as $status)
        {
            $this->assertTrue($status->validate());
        }
    }

    public function testGetUnsuccessfulNelnetStatuses()
    {
        $nelnet = $this->newNelnet();
        $statuses = $nelnet->getUnsuccessfulStatuses();

        $this->assertTrue(count($statuses) > 1);

        foreach ($statuses as $status)
        {
            $this->assertFalse($status->validate());
        }
    }
}