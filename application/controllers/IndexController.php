<?php

class IndexController extends Zend_Controller_Action
{
    public function init()
    {
    }

    public function indexAction()
    {
        $paginator = Zend_Paginator::factory($this->getModels());
        $paginator->setCurrentPageNumber($this->getRequest()->getParam('page', 1));
        $this->view->paginator = $paginator;
    }
    
    /**
     * Generate an array of Foo models
     * 
     * @return array
     */
    private function getModels()
    {
        $models = array();
        for ($i = 0; $i < 100; $i++) {
            $foo = new Application_Model_Foo(
                    'foo_' . $i,
                    'bar_' . $i,
                    'baz_' . $i
                    );
            $models[] = $foo;
        }
        return $models;
    }
}

