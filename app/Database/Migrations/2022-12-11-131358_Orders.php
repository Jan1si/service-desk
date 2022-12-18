<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Orders extends Migration
{
public function up()
{
    $this->forge->addField([
        'id' => [
            'type'           => 'INT',
            'constraint'     => 11,
            'unsigned'       => true,
            'auto_increment' => true,
        ],
        'category_id' => [
            'type'       => 'INT',
            'constraint'     => 11,
            'unsigned'       => true,
            'null' => true,
        ],
        'priority_id' => [
            'type'       => 'INT',
            'constraint'     => 11,
            'unsigned'       => true,
            'null' => true,
        ],
        'status_id' => [
            'type'       => 'INT',
            'constraint'     => 11,
            'unsigned'       => true,
            'null' => true,
        ],
        'user_id' => [
            'type'       => 'INT',
            'constraint'     => 11,
            'unsigned'       => true,
            'null' => true,
        ],
        'role_id' => [
            'type'       => 'INT',
            'constraint'     => 11,
            'unsigned'       => true,
            'null' => true,
        ],
        'department_id' => [
            'type'       => 'INT',
            'constraint'     => 11,
            'unsigned'       => true,
            'null' => true,
        ],
        'worker_id' => [
            'type'       => 'INT',
            'constraint'     => 11,
            'unsigned'       => true,
            'null' => true,
        ],
        'title' => [
            'type'       => 'VARCHAR',
            'constraint'     => "100",
            'null' => false,
        ],
        'deskription' => [
            'type'       => 'VARCHAR',
            'constraint'     => "50",
            'null' => false,
        ],
        'created_at' => [
            'type' => 'DATETIME',
            'null' => true,
        ],
        'updated_at' => [
            'type' => 'DATETIME',
            'null' => true,
        ],
        'close_at' => [
            'type' => 'DATETIME',
            'null' => true,
        ],
    ]);
    $this->forge->addPrimaryKey('id');
    $this->forge->addForeignKey('role_id', 'roles', 'id');
    $this->forge->addForeignKey('user_id', 'users', 'id');
    // $this->forge->addForeignKey('status_id', 'statuses', 'id');
    // $this->forge->addForeignKey('priority_id', 'priorities ', 'id');
    // $this->forge->addForeignKey('category_id', 'categories', 'id');
    $this->forge->createTable('orders');
}

public function down()
{
    $this->forge->dropTable('orders');
}
}
