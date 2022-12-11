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
            'null' => true,
        ],
        'priority_id' => [
            'type'       => 'INT',
            'constraint'     => 11,
            'null' => true,
        ],
        'status_id' => [
            'type'       => 'INT',
            'constraint'     => 11,
            'null' => true,
        ],
        'user_id' => [
            'type'       => 'INT',
            'constraint'     => 11,
            'null' => true,
        ],
        'role_id' => [
            'type'       => 'INT',
            'constraint'     => 11,
            'null' => true,
        ],
        'department_id' => [
            'type'       => 'INT',
            'constraint'     => 11,
            'null' => true,
        ],
        'worker_id' => [
            'type'       => 'INT',
            'constraint'     => 11,
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
    $this->forge->addKey('id', true);
    $this->forge->createTable('orders');
}

public function down()
{
    $this->forge->dropTable('orders');
}
}
