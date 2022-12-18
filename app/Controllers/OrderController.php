<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class OrderController extends ResourceController
{

    protected $modelName = 'App\Models\Order';
    protected $format = 'json';

    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        $data = [
            "message" => "success",
            "order_data" => $this->model->findAll()
        ];

        return $this->respond($data, 200);
    }

    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function show($id = null)
    {
        $data = [
            "message" => "success",
            "order_data" => $this->model->find($id)
        ];

        if (empty($data['order_data'])) {
            return $this->failNotFound('Not Found 404');
        }

        return $this->respond($data, 200);
    }

    /**
     * Return a new resource object, with default properties
     *
     * @return mixed
     */
    public function new()
    {
        //
    }

    /**
     * Create a new resource object, from "posted" parameters
     *
     * @return mixed
     */
    public function create()
    {

        $rules = $this->validate([
            'category_id'=> 'required|integer|is_natural',
            'priority_id'=> 'required|integer|is_natural',
            'status_id'=> 'required|integer|is_natural',
            'user_id'=> 'required|integer|is_natural',
            'role_id'=> 'required|integer|is_natural',
            'department_id'=> 'required|integer|is_natural',
            'title'=> 'required|min_length[10]|max_length[50]',
            'deskription'=> 'required',
        ]);

        if (!$rules) {
            $response = [
                'message' => $this->validator->getErrors()
            ];

            return $this->failValidationErrors($response);
        }

        $this->model->insert([
            'category_id' => esc($this->request->getVar('category_id')),
            'priority_id' => esc($this->request->getVar('priority_id')),
            'status_id' => esc($this->request->getVar('status_id')),
            'user_id' => esc($this->request->getVar('user_id')),
            'role_id' => esc($this->request->getVar('role_id')),
            'department_id' => esc($this->request->getVar('department_id')),
            'title' => esc($this->request->getVar('title')),
            'deskription' => esc($this->request->getVar('deskription')),
        ]);

        $response = [
            'message' => 'success',
        ];

        return $this->respondCreated($response);
    }

    /**
     * Return the editable properties of a resource object
     *
     * @return mixed
     */
    public function edit($id = null)
    {
        //
    }

    /**
     * Add or update a model resource, from "posted" properties
     *
     * @return mixed
     */
    public function update($id = null)
    {
        $rules = $this->validate([
            'category_id'=> 'required|integer|is_natural',
            'priority_id'=> 'required|integer|is_natural',
            'status_id'=> 'required|integer|is_natural',
            'user_id'=> 'required|integer|is_natural',
            'role_id'=> 'required|integer|is_natural',
            'department_id'=> 'required|integer|is_natural',
            'worker_id'=> 'integer|is_natural',
            'title'=> 'required|min_length[10]|max_length[50]',
            'deskription'=> 'required',
        ]);

        if (!$rules) {
            $response = [
                'message' => $this->validator->getErrors()
            ];

            return $this->failValidationErrors($response);
        }

        $this->model->update($id, [
            'category_id' => esc($this->request->getVar('category_id')),
            'priority_id' => esc($this->request->getVar('priority_id')),
            'status_id' => esc($this->request->getVar('status_id')),
            'user_id' => esc($this->request->getVar('user_id')),
            'role_id' => esc($this->request->getVar('role_id')),
            'department_id' => esc($this->request->getVar('department_id')),
            'worker_id' => esc($this->request->getVar('worker_id')),
            'title' => esc($this->request->getVar('title')),
            'deskription' => esc($this->request->getVar('deskription')),
            'close_at' => esc($this->request->getVar('close_at')),
        ]);

        $response = [
            'message' => 'success',
        ];

        return $this->respond($response, 200);
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return mixed
     */
    public function delete($id = null)
    {
        $this->model->delete($id);

        $response = [
            'message' => 'success'
        ];

        return $this->respondDeleted($response, 200);
    }
}
