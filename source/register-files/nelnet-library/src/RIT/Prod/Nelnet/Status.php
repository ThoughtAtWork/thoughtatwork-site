<?php

namespace RIT\Prod\Nelnet;

class Status {
    private $id;
    private $title;
    private $detail;
    private $success;

    public function __construct($id, $title, $success=FALSE, $detail='')
    {
        $this->id		= $id;
        $this->title	= $title;
        $this->detail	= $detail;
        $this->success	= $success;
    }

    public function __toString() {
        return $this->id;
    }

    public function validate()
    {
        return $this->success;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getDetails()
    {
        return $this->detail;
    }

    public function getTitle()
    {
        return $this->title;
    }
}