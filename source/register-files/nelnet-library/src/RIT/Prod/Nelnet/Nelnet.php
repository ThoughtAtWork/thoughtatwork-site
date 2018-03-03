<?php

namespace RIT\Prod\Nelnet;

class Nelnet
{
    public $contact = "";
    public $contactEmail = "";
    public $redirectUrl = "";
    public $orderType = "";
    public $sharedSecret = "";
    public $redirectUrlParameters = 'transactionType,transactionStatus,transactionId,originalTransactionId,transactionTotalAmount,orderNumber,email';
    public $statuses;
    public $defaults = array(
        'transactionType' => "1",
        'transactionStatus' => "55",
        'transactionId' => "-1",
        'originalTransactionId' => "",
        'transactionTotalAmount' => "0",
        'email' => "example@fake.com",
        'timestamp' => "622512000"
    );
    public $logFileLocation = "";

    private $nelnetUrl;
    private $nelnetTestUrl = "https://eservicestest.rit.edu/infinetProcessor/passthroughRedirect.process";
    private $nelnetProdUrl = "https://eservices.rit.edu/infinetProcessor/passthroughRedirect.process";

    public function __construct($config=array())
    {
        if (is_array($config))
        {
            foreach ($config as $key => $val)
            {
                if (isset($this->$key))
                {
                    $this->$key = $val;
                }
            }
        }

        $this->statuses = $this::initStatuses();
    }

    public function __toString()
    {
        return "".$this;
    }

    public function buildRequest()
    {
        if (empty($this->nelnetUrl))
        {
            throw new \Exception("Nelnet Environment is not set.  Set with \$nelnet->setNelnetEnvironment() function.");
        }

        if (empty($this->redirectUrl))
        {
            throw new \Exception("Nelnet Redirect URL (confirmation page) is not set.");
        }
        return new Request($this);
    }

    public function buildResponse($array)
    {
        return new Response($array, $this);
    }

    public function addRedirectUrl($url)
    {
        // possibly check for a full string, but as of now just take a relative url.
        $this->redirectUrl = "https://" . $_SERVER['HTTP_HOST'] . $url;
    }

    public function getNelnetUrl()
    {
        return $this->nelnetUrl;
    }

    // return the custom ids for the statuses that aren't actual from the nelnet system
    // this usually means someone paid outside of nelnet
    public function getNonNelnetStatuses()
    {
        return array(
            'other'         => $this->statuses['51'],
            'refund'        => $this->statuses['52'],
            'check'         => $this->statuses['53'],
            'cash'          => $this->statuses['54'],
            'notRequired'   => $this->statuses['55'],
            'pendingCheck'  => $this->statuses['56'],
        );
    }

    /**
     * @return array
     * Returns all Nelnet Statuses
     */
    public function getAllStatuses()
    {
        return $this->statuses;
    }

    /**
     * @return array
     * Returns all successfull statuses
     */
    public function getSuccessfulStatuses()
    {
        return array_filter($this->statuses, function($status) {
            return $status->validate();
        });
    }

    /**
     * @return mixed
     * Returns all unsuccessful statusesA
     */
    public function getUnsuccessfulStatuses()
    {
        return array_filter($this->statuses, function($status) {
            return ( ! $status->validate());
        });
    }

    public function setNelnetEnvironment($env)
    {
        switch($env)
        {
            case "prod":
            case "production":
                $this->nelnetUrl = $this->nelnetProdUrl;
                break;
            case "test":
            case "apps":
            case "staging":
                $this->nelnetUrl = $this->nelnetTestUrl;
                break;
        }
    }

    /**
     * initStatuses
     * @return array
     * Initializes the statuses for reference later.
     */
    private function initStatuses()
    {
        return array(
            '1'  => new Status(1,   'Accepted',             TRUE,   'Accepted credit card payment/refund (successful)'),
            '2'  => new Status(2,   'Rejected',             FALSE,  'Rejected credit card payment/refund (declined)'),
            '3'  => new Status(3,   'Error',                FALSE,  'Error credit card payment/refund (error)'),
            '4'  => new Status(4,   'Unknown Credit Card',  FALSE,  'Unknown credit card payment/refund (unknown)'),
            '5'  => new Status(5,   'Accepted eCheck',      TRUE,   'Accepted eCheck payment (successful)'),
            '6'  => new Status(6,   'Posted eCheck',        TRUE,   'Posted eCheck payment (successful)'),
            '7'  => new Status(7,   'Returned eCheck',      FALSE,  'Returned eCheck payment (failed)'),
            '8'  => new Status(8,   'NOC',                  TRUE,   'NOC eCheck payment (successful)'),
            '51' => new Status(51,  'Paid Other',           TRUE,   'Paid outside nelnet (successful)'),
            '53' => new Status(53,  'Paid with Check',      TRUE,   'Paid outside nelnet with check (successful)'),
            '54' => new Status(54,  'Paid with Cash',       TRUE,   'Paid outside nelnet with cash (successful)'),
            '55' => new Status(55,  'Payment not Required', TRUE,   'Payment not required (successful)'),
            '56' => new Status(56,  'Pending Check',        FALSE,  'Payment with check pending'),
            '52' => new Status(52,  'Payment Refunded',     FALSE,  'Payment Refunded')
        );
    }
}
