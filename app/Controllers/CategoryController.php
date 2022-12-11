<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class CategoryController extends ResourceController
{

    protected $modelName = 'App\Models\Category';
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
            "category_data" => $this->model->findAll(),
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
            "category_data" => $this->model->find($id),
        ];

        if (empty($data["category_data"])) {
            return $this->failNotFound("Not Found 404");
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
            'category_name' => 'required|is_unique[categories.category_name]|min_length[3]|max_length[50]'
        ]);

        if (!$rules) {
            $response = [
                "message" => $this->validator->getErrors()
            ];

            return $this->failValidationErrors($response);
        }

        $this->model->insert([
            'category_name' => esc($this->request->getVar('category_name'))
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
            'category_name' => 'required|min_length[3]|max_length[50]'
        ]);

        if (!$rules) {
            $response = [
                "message" => $this->validator->getErrors()
            ];

            return $this->failValidationErrors($response);
        }

        $this->model->update($id, [
            'category_name' => esc($this->request->getVar('category_name'))
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
            "message" => "success"
        ];
        return $this->respondDeleted($response, 200);
    }
}
