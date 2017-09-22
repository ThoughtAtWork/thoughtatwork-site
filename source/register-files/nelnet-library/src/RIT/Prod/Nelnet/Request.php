<?php

namespace RIT\Prod\Nelnet;

/**
 * Class Request
 * @package RIT\Prod\Nelnet
 * Builds a NELNET Request so you can run methods on it.
 */
class Request
{
    private $config;

    public function __construct($config)
    {
        $this->config = $config;
    }

    /**
     * @param array $params
     * @param mixed $bypass
     * Send the Request.  If a status is provided, creates a URL similar to a nelnet response and redirects
     * to configured redirect-url.  Otherwise, sends it to nelnet.
     */
    public function send($params = null, $bypass = false)
    {
        if ($bypass)
        {
            $redirectTo = $this->buildNelnetResponseUrl($params);
        } else if ($params) {
            $redirectTo = $this->buildNelnetUrl($params);
        } else
        {
            $redirectTo = $this->redirectURL;
        }

        header('Location: ' . $redirectTo);
    }

    /**
     * build the nelnet url to redirect to.
     */
    public function buildNelnetUrl($params)
    {
        if (!isset($params['id']))
        {
            throw new \InvalidArgumentException("You must provide an array with at least an `id` field");
        }
        if (!isset($params['amount']))
        {
            throw new \InvalidArgumentException("You must provide an amount.  This amount must be in pennies.");
        }

        $redirectURL = $this->config->getNelnetUrl();

        $urlParams = '?orderType='.$this->config->orderType.'&orderNumber='.$params['id'].
            '&amount='.$params['amount'].'&redirectUrl='.$this->config->redirectUrl;

        if(isset($params['email']))
        {
            $urlParams .= '&email=' . $params['email'];
        }

        if(isset($params['extras']))
        {
            foreach ($params['extras'] as $i => $extra)
            {
                $urlParams .= '&userChoice' . $i . '=' . $extra;
            }
        }

        $urlParams .= '&redirectUrlParameters='.$this->config->redirectUrlParameters;

        return $redirectURL . $urlParams;
    }

    /**
     * Build a url similar to the NELNET response,
     * used for faking a NELNET response and bypassing the
     * payment system, for things like cash or check transactions.
     */
    public function buildNelnetResponseUrl($params, $isTest = false)
    {
        if (!isset($params['id']))
        {
            throw new \InvalidArgumentException("You must provide an array with at least an `id` field");
        }

        // Set the defaults for any response;
        $defaults = $this->config->defaults;
        $redirectURL = $this->config->redirectUrl;
        $time = time();
        if ($isTest)
        {
            $time = $defaults['timestamp'];
        }

        $urlParams = "?";
        $hashParams = array();

        $redirectUrlParameters = explode(',', $this->config->redirectUrlParameters);

//        $i = 1;
        foreach ($redirectUrlParameters as $param) {

            $urlParams .= "&" . $param . "=";

            if ($param == "orderNumber")
            {
                $urlParams .= $params['id'];
                $hashParams[] = $params['id'];
            }
            else if (isset($this->config->$param)) {
                $urlParams .= $this->config->$param;
                $hashParams[] = $this->config->$param;
            }
            else if (isset($params[$param]))
            {
                $urlParams .= $params[$param];
                $hashParams[] = $params[$param];
            }
//            else if (preg_match("/userChoice([1-5]{1})/", $param))
//            {
//                $urlParams .= $>extras[$i];
//                $i++;
//            }
            else if (isset($defaults[$param]))
            {
                $urlParams .= $defaults[$param];
                $hashParams[] = $defaults[$param];
            }
        }

        $timestamp = (isset($params['timestamp'])) ? $params['timestamp'] : $time;
        $urlParams .= "&timestamp=" . $timestamp;
        $hashParams[] = $timestamp;
        // add it to the URL
        $urlParams .= "&hash=" . $this->buildHash($hashParams);

        return $redirectURL . $urlParams;
    }

    public function buildHash($params = null)
    {
        if (!is_array($params))
        {
            throw new \UnexpectedValueException("Expected \$params to be an array. Got: ".$params);
        }
        $hash = "";
        foreach ($params as $k => $p)
        {
            $hash .= $p;
        }
        $hash .= $this->config->sharedSecret;
        return md5($hash);
    }

}