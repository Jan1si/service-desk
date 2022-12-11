<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Priorities extends Migration
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
            'priority_name' => [
                'type' => 'VARCHAR',
                'constraint'     => "100",
                'null' => false,
            ],
            'max_time' => [
                'type' => 'INT',
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
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('priorities');
    }

    public function down()
    {
        $this->forge->dropTable('priorities');
    }
}
