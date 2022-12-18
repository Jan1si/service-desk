<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (is_file(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
// The Auto Routing (Legacy) is very dangerous. It is easy to create vulnerable apps
// where controller filters or CSRF protection are bypassed.
// If you don't want to define all routes, please use the Auto Routing (Improved).
// Set `$autoRoutesImproved` to true in `app/Config/Feature.php` and set the following to true.
// $routes->setAutoRoute(false);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Home::index');


// Resourse to Category
$routes->get('category', 'CategoryController::index');
$routes->get('category/(:num)', 'CategoryController::show/$1');
$routes->post('category', 'CategoryController::create');
$routes->put('category/(:num)', 'CategoryController::update/$1');
$routes->delete('category/(:num)', 'CategoryController::delete/$1');

// Resourse to User
$routes->get('user', 'UserController::index');
$routes->get('user/(:num)', 'UserController::show/$1');
$routes->post('user', 'UserController::create');
$routes->put('user/(:num)', 'UserController::update/$1');
$routes->delete('user/(:num)', 'UserController::delete/$1');

// Resourse to Department
$routes->get('department', 'DepartmentController::index');
$routes->get('department/(:num)', 'DepartmentController::show/$1');
$routes->post('department', 'DepartmentController::create');
$routes->put('department/(:num)', 'DepartmentController::update/$1');
$routes->delete('department/(:num)', 'DepartmentController::delete/$1');

// Resourse to Prioriti
$routes->get('prioriti', 'PrioritiController::index');
$routes->get('prioriti/(:num)', 'PrioritiController::show/$1');
$routes->post('prioriti', 'PrioritiController::create');
$routes->put('prioriti/(:num)', 'PrioritiController::update/$1');
$routes->delete('prioriti/(:num)', 'PrioritiController::delete/$1');

// Resourse to Role
$routes->get('role', 'RoleController::index');
$routes->get('role/(:num)', 'RoleController::show/$1');
$routes->post('role', 'RoleController::create');
$routes->put('role/(:num)', 'RoleController::update/$1');
$routes->delete('role/(:num)', 'RoleController::delete/$1');


// Resourse to Status
$routes->get('status', 'StatusController::index');
$routes->get('status/(:num)', 'StatusController::show/$1');
$routes->post('status', 'StatusController::create');
$routes->put('status/(:num)', 'StatusController::update/$1');
$routes->delete('status/(:num)', 'StatusController::delete/$1');


// Resourse to Order
$routes->get('order', 'OrderController::index');
$routes->get('order/(:num)', 'OrderController::show/$1');
$routes->post('order', 'OrderController::create');
$routes->put('order/(:num)', 'OrderController::update/$1');
$routes->delete('order/(:num)', 'OrderController::delete/$1');

/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (is_file(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
