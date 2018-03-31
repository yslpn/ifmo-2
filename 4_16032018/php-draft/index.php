<?php

require('vendor/autoload.php');

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app = new Silex\Application();

$app->get('/hello{name}', function($name) use ($app) {
  return 'Hello '.$app->escape($name);
});

$app->get('/date', function(){
  return date('r');
});

$app->get('/', function(){
  $response = new Response('<h1>'.date("d/m/Y H:i").'</h1>', 200);
  if (isset($_GET['public'])) {
    $response->headers->set('Access-Control-Allow-Origin', '*');
    $response->headers->set('Content-type', 'text/plain; charset=utf-8');
    $response->headers->set('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  }
  return $response; 
});

$app->get('print', function(){
  $response = new Response(file_get_contents(basename(__FILE__)), 200);
  if (isset($_GET['public'])) {
    $response->headers->set('Access-Control-Allow-Origin', '*');
    $response->headers->set('Content-type', 'text/plain; charset=utf-8');
    $response->headers->set('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  }
  return $response; 
});

$app->get('/author', function(){
  $response = new Response('<h4 id="author" title="GossJS">Yaroslav Slepukhin</h4>', 200);
  if (isset($_GET['public'])) {
    $response->headers->set('Access-Control-Allow-Origin', '*');
    $response->headers->set('Content-type', 'text/plain; charset=utf-8');
    $response->headers->set('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  }
  return $response; 
});

$app->get('/info', function(){
  return phpinfo(); 
 });

$app->run();