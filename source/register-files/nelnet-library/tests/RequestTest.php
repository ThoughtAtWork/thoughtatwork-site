<?php

namespace RIT\Prod\Nelnet;


class RequestTest extends \PHPUnit_Framework_TestCase
{

    private $nelnet = null;
    private $request = null;

    function __construct()
    {
        $nelnet = new Nelnet();
        $nelnet->orderType = "test";
        $nelnet->sharedSecret = "secret";
        $nelnet->redirectUrl = "http://www.test.com/fake/confirmation/page";
        $nelnet->setNelnetEnvironment("staging");

        $this->nelnet = $nelnet;
        $this->request = $nelnet->buildRequest();
    }

    function testNelnet()
    {
        $nelnet = $this->nelnet;
        $this->assertInstanceOf('\RIT\Prod\Nelnet\Nelnet', $nelnet);
    }

    function testRequest()
    {
        $request = $this->request;
        $this->assertInstanceOf('\RIT\Prod\Nelnet\Request', $request);
    }

    function testBuildNelnetUrl()
    {
        // setup
        $request = $this->request;
        $nelnetReturnParams = '&redirectUrlParameters=' . $this->nelnet->redirectUrlParameters;

        // Test without Email
        $params = array(
            "amount" => "1000", //$10.00
            "id" => "test"
        );
        $testUrl = $request->buildNelnetUrl($params);
        $knownUrl = $this->nelnet->getNelnetUrl() . '?orderType=' . $this->nelnet->orderType . '&orderNumber=' . $params['id'] .
            '&amount=' . $params['amount'] . '&redirectUrl=' . $this->nelnet->redirectUrl;

        $this->assertEquals($knownUrl . $nelnetReturnParams, $testUrl);

        // Test with Email
        $params['email'] = "fake.customer@fake.url";
        $testUrl = $request->buildNelnetUrl($params);
        $knownUrl .= '&email=' . $params['email'];

        $this->assertEquals($knownUrl . $nelnetReturnParams, $testUrl);

        // Test with Extras


        // Test without params:
        $this->setExpectedException('InvalidArgumentException');
        $testUrl = $request->buildNelnetUrl(array());
    }

    function testBuildHash()
    {
        $defaults = $this->nelnet->defaults;
        $params = array(
            $defaults['transactionType'],
            $defaults['transactionStatus'],
            $defaults['transactionId'],
            $defaults['originalTransactionId'],
            $defaults['transactionTotalAmount'],
            '10',
            $defaults['email'],
            $defaults['timestamp'],
        );

        $request = $this->request;

        $this->assertEquals('d4c003fa902a65d4be83a7c2261c4e78', $request->buildHash($params));

        $this->setExpectedException('UnexpectedValueException');
        $fail = $request->buildHash();


        // test with extras
    }


    function testBuildNelnetResponseUrl()
    {
        $request = $this->request;

        $testParams = array(
            "id" => "10",
            "transactionType" => "1",
            "transactionStatus" => "60",
            "transactionId" => "15054236",
            "originalTransactionId" => "5555555",
            "email" => "tester@test.com",
        );


        // Test the defaults
        $defaults = $this->nelnet->defaults;
        $knownUrl = $this->nelnet->redirectUrl . "?" . "&transactionType=" . $defaults['transactionType'] .
            "&transactionStatus=" . $defaults['transactionStatus'] . "&transactionId=" . $defaults['transactionId'] .
            "&originalTransactionId=" . $defaults['originalTransactionId'] . "&transactionTotalAmount=" .
            $defaults['transactionTotalAmount'] . "&orderNumber=" . "10" . "&email=" . $defaults['email'] .
            "&timestamp=" . $defaults['timestamp'] . "&hash=" . $request->buildHash(array(
                $defaults['transactionType'],
                $defaults['transactionStatus'],
                $defaults['transactionId'],
                $defaults['originalTransactionId'],
                $defaults['transactionTotalAmount'],
                '10',
                $defaults['email'],
                $defaults['timestamp'],
            ));
        $this->assertEquals($knownUrl, $request->buildNelnetResponseUrl(array('id' => '10'), true));

        // Test the test parameters:
        $knownUrl = $this->nelnet->redirectUrl . "?" . "&transactionType=" . $testParams['transactionType'] .
            "&transactionStatus=" . $testParams['transactionStatus'] . "&transactionId=" . $testParams['transactionId'] .
            "&originalTransactionId=" . $testParams['originalTransactionId'] . "&transactionTotalAmount=" .
            $defaults['transactionTotalAmount'] . "&orderNumber=" . "10" . "&email=" . $testParams['email'] .
            "&timestamp=" . $defaults['timestamp'] . "&hash=" . $request->buildHash(array(
                $testParams['transactionType'],
                $testParams['transactionStatus'],
                $testParams['transactionId'],
                $testParams['originalTransactionId'],
                $defaults['transactionTotalAmount'],
                '10',
                $testParams['email'],
                $defaults['timestamp'],
            ));
        $this->assertEquals($knownUrl, $request->buildNelnetResponseUrl($testParams, true));

        $this->setExpectedException('InvalidArgumentException');
        $fail = $request->buildNelnetResponseUrl(array());

    }


    /**
     * Tests to make sure that you've set the nelnet environment.  Fixes the problem where it's not documented that you
     * need to do this and now throws an exception to let you know if you didn't set the env.
     */
    function testSetTheNelnetEnvironment()
    {
        $nelnet = new Nelnet();

        $nelnet->orderType = "test";
        $nelnet->sharedSecret = "secret";
        $nelnet->redirectUrl = "http://www.test.com/fake/confirmation/page";

        $this->setExpectedException("Exception", "Nelnet Environment is not set.  Set with \$nelnet->setNelnetEnvironment() function.");
        $fail = $nelnet->buildRequest();
    }

    function testSetTheNelnetRedirectURL()
    {
        $nelnet = new Nelnet();

        $nelnet->orderType = "test";
        $nelnet->sharedSecret = "secret";
        $nelnet->setNelnetEnvironment("staging");

        $this->setExpectedException("Exception", "Nelnet Redirect URL (confirmation page) is not set.");
        $fail = $nelnet->buildRequest();
    }

}