<?php

namespace RIT\Prod\Nelnet;

/**
 * Class Response
 * @package RIT\Prod\Nelnet
 * Builds a NELNET response so you can run methods on it.
 */
class Response
{

    private $transactionType = "";
    private $transactionStatus = "";
    private $transactionId = "";
    private $originalTransactionId = "";
    private $transactionTotalAmount = "";
    private $transactionDate = "";
    private $transactionAcountType = "";
    private $transactionEffectiveDate = "";
    private $transactionDescription = "";
    private $transactionResultDate = "";
    private $transactionResultEffectiveDate = "";
    private $transactionResultCode = "";
    private $transactionResultMessage = "";
    private $orderNumber = "";
    private $orderType = "";
    private $orderName = "";
    private $orderDescription = "";
    private $orderAmount = "";
    private $orderFee = "";
    private $orderAmountDue = "";
    private $orderDueDate = "";
    private $orderBalance = "";
    private $orderCurrentStatusBalance = "";
    private $orderCurrentStatusAmountDue = "";
    private $payerType = "";
    private $payerIdentifier = "";
    private $payerFullName = "";
    private $actualPayerType = "";
    private $actualPayerIdentifier = "";
    private $actualPayerFullName = "";
    private $accountHolderName = "";
    private $streetOne = "";
    private $streetTwo = "";
    private $city = "";
    private $state = "";
    private $zip = "";
    private $country = "";
    private $daytimePhone = "";
    private $eveningPhone = "";
    private $email = "";
    private $timestamp = "";
    private $hash = "";
    private $extras = array();

    private $config;

    /**
     * Constructor
     * @param $array
     * Pass in the $_GET variable and we'll handle the construction of the Response object.
     */
    public function __construct($array, $config)
    {
        // Parse through the $_GET variables to fill our response.
        if (is_array($array))
        {
            foreach ($array as $key => $val)
            {
                if (isset($this->$key))
                {
                    $this->$key = $val;
                }
                else if (preg_match("/userChoice[1-5]/",$key))
                {
                    $extras[] = $val;
                }
            }
        }

        $this->config = $config;
        $this->statuses = $config->statuses;
    }
    
    public function __toString()
    {
        return $this->all("\n");
    }

    public function __set($variable, $value)
    {
        // do nothing because nobody should be able to set variables.
    }

    public function __get($variable)
    {
        return $this->$variable;
    }

    public function validateHash()
    {
        $hashstring = "" . $this->transactionType . $this->transactionStatus . $this->transactionId . $this->originalTransactionId .
                      $this->transactionTotalAmount . $this->transactionDate . $this->transactionAcountType . $this->transactionEffectiveDate .
                      $this->transactionDescription . $this->transactionResultDate . $this->transactionResultEffectiveDate .
                      $this->transactionResultCode . $this->transactionResultMessage . $this->orderNumber . $this->orderType . $this->orderName .
                      $this->orderDescription . $this->orderAmount . $this->orderFee . $this->orderAmountDue . $this->orderDueDate . $this->orderBalance .
                      $this->orderCurrentStatusBalance . $this->orderCurrentStatusAmountDue . $this->payerType . $this->payerIdentifier .
                      $this->payerFullName . $this->actualPayerType . $this->actualPayerIdentifier . $this->actualPayerFullName .
                      $this->accountHolderName . $this->streetOne . $this->streetTwo . $this->city . $this->state . $this->zip . $this->country . $this->daytimePhone .
                      $this->eveningPhone . $this->email;

        foreach ($this->extras as $key => $val)
        {
            $hashstring .= $val;
        }

        $hashstring .= $this->timestamp . $this->config->sharedSecret;

        if (md5($hashstring) == $this->hash)
        {
            return true;
        }

        //@todo: Possibly throw an error here if false instead of just return?
        return false;
    }

    public function validateStatus()
    {
        $statusIndex = $this->transactionStatus;
        $status = $this->config->statuses[$statusIndex];

        // Make sure we have the correct status
        if ($statusIndex != $status->getId())
        {
            throw new \UnexpectedValueException("Expected status of \"".$statusIndex."\".  Instead got \"".$status->getId()."\".");
        }

        //@todo: Possibly throw an error here if false instead of just return?
        return $status->validate();
    }

    public function validate()
    {
        return $this->validateHash() && $this->validateStatus();
    }

    public function all($separator, $onlyFilled = false)
    {
        $string = "";
        
        $keys = array(
            "transactionType",
            "transactionStatus",
            "transactionId",
            "originalTransactionId",
            "transactionTotalAmount",
            "transactionDate",
            "transactionAcountType",
            "transactionEffectiveDate",
            "transactionDescription",
            "transactionResultDate",
            "transactionResultEffectiveDate",
            "transactionResultCode",
            "transactionResultMessage",
            "orderNumber",
            "orderType",
            "orderName",
            "orderDescription",
            "orderAmount",
            "orderFee",
            "orderAmountDue",
            "orderDueDate",
            "orderBalance",
            "orderCurrentStatusBalance",
            "orderCurrentStatusAmountDue",
            "payerType",
            "payerIdentifier",
            "payerFullName",
            "actualPayerType",
            "actualPayerIdentifier",
            "actualPayerFullName",
            "accountHolderName",
            "streetOne",
            "streetTwo",
            "city",
            "state",
            "zip",
            "country",
            "daytimePhone",
            "eveningPhone",
            "email",
            "timestamp",
            "hash",
        );

        foreach ($keys as $key)
        {
            $value = $this->$key;
            if (($onlyFilled && $value!="") || !$onlyFilled)
            {
                $string .= $key . "=>" . $value . $separator;
            }
        }
        return $string;
    }

    public function log()
    {
        if ($this->config->logFileLocation == "")
        {
            return null;
        }

        $string = $this->all("|", true);
        $string = "RESPONSE::".$string."\n";

        file_put_contents($this->config->logFileLocation, $string, FILE_APPEND);
    }
}