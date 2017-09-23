<?php


namespace RIT\Prod\Nelnet;


class ResponseTest extends \PHPUnit_Framework_TestCase {

    private $nelnet = null;
    private $response = null;
    private $get = null;

    function __construct()
    {
        $nelnet = new Nelnet();
        $nelnet->sharedSecret = "secret";
        $nelnet->logFileLocation = "./tests/logs/logTest.log";
        
        $this->get = array(
            "transactionStatus" => "1",
            "transactionType" => "1",
            "transactionId" => "5001601855",
            "originalTransactionId" => "",
            "orderNumber" => "136",
            "transactionTotalAmount" => "1000",
            "email" => "kxbtwc%40rit.edu",
            "timestamp" => "1414433112829",
            "hash" => "f97fee997f59c9d05ae6cb327e2c6d3a",
        );

        $this->nelnet = $nelnet;
        $this->response = $nelnet->buildResponse($this->get);
    }

    function testResponse()
    {
        $this->assertInstanceOf('\RIT\Prod\Nelnet\Nelnet', $this->nelnet);
        $this->assertInstanceOf('\RIT\Prod\Nelnet\Response', $this->response);
    }

    function testValidateHash()
    {
        $response = $this->response;
        $this->assertTrue($response->validateHash());
    }

    function testValidateStatus()
    {
        $response = $this->response;
        $this->assertTrue($response->validateStatus());

        // test with false status
        $this->get['transactionStatus'] = "2"; //known false
        $response = $this->nelnet->buildResponse($this->get);
        $this->assertFalse($response->validateStatus());
    }

    function testLog()
    {
        $response = $this->response;
        $response->log();

        $log = file($this->nelnet->logFileLocation);
        $this->assertEquals("RESPONSE::".$response->all("|",true)."\n", $log[count($log)-1]);
    }

    function testNoSet()
    {
        $response = $this->response;

        $response->name = "testName";
        $this->assertFalse(isset($response->name));

        $response->orderFee = "1500";
        $this->assertEquals("", $response->orderFee);
    }

}
