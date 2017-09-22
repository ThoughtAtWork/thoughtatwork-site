#RIT Nelnet Library

Note: Any of the "Nelnet Statuses" that come back above 50 are not actually coming from NELNET.

#Installing

The easiest way to install this library is via composer, however it requires that you have [git set up to use SSH keys](https://confluence.atlassian.com/display/BITBUCKET/Set+up+SSH+for+Git).

Add the following to your composer.json file inside your project:

    "require": {
        "ritproduction/nelnet": "dev-master"
    },
    "repositories": [
        {
            "type": "vcs",
            "url": "git@bitbucket.org:ritproduction/nelnet-library.git"
        }
    ]
    
and the composer auto-loader will take care of the rest.

----

If you don't already use composer ([which you should](http://nelm.io/blog/2011/12/composer-part-1-what-why/)) you'll just want to [clone the repository](https://confluence.atlassian.com/display/BITBUCKET/Clone+a+repository#Clonearepository-CloningaGitrepository) 
into your desired folder, and then 
 
    require_once('path/to/nelnet/src/autoload.php');

#Usage

The following code is all you need to get started:

    use RIT\Prod\Nelnet as Nelnet;
    
    require_once("path/to/Nelnet/autoload.php");
    
    $nelnet = new Nelnet\Nelnet();
    $nelnet->orderType = "[Your Order Type]";
    $nelnet->sharedSecret = "[Your Shared Secret]";
    $nelnet->redirectUrl = "[Your Confirmation Page]";
    $nelnet->setNelnetEnvironment("[Staging | Production]");
    
    $params = array(
        "id" => [This instance's ID],
        "amount" => (XXX * 100), // dollars (X) times 100 to convert to pennies
    );
    
    $request = $nelnet->buildRequest();
    $request->send($params);
    
and for your confirmation page:

    use RIT\Prod\Nelnet as Nelnet;
    
    require_once("path/to/Nelnet/autoload.php");
    
    $nelnet = new Nelnet\Nelnet();
    $nelnet->sharedSecret = "[Your Shared Secret]";
    $response = $nelnet->buildResponse($_GET);
    


You could even split up the Autoload and Nelnet initialization into a common, shared file and configure it there and then all you need to do is build the request and response on the appropriate pages:

header.php

    ...
    use RIT\Prod\Nelnet as Nelnet;
    
    require_once("path/to/Nelnet/autoload.php");
    
    $nelnet = new Nelnet\Nelnet();
    $nelnet->orderType = "[Your Order Type]";
    $nelnet->sharedSecret = "[Your Shared Secret]";
    $nelnet->redirectUrl = "[Your Confirmation Page]";
    $nelnet->setNelnetEnvironment("[Staging | Production]");
    ...
    
form-handler.php

    ...
    include ('/path/to/header.php');
    ...
    $params = array(
        "id" => [This instance's ID],
        "amount" => (XXX * 100),
        "email" => [User's email],
    );
    
    $request = $nelnet->buildRequest();
    $request->send($params);
    
confirmation.php

    ...
    include('path/to/header.php');
    ...
    $response = $nelnet->buildResponse($_GET);
    ...
    //print human readble status
    $statuses = $response->config->statuses;
    $current_status = $statuses[$response->transactionStatus];
    print $current_status->getDetails();
    