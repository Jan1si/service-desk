<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Statuses extends Migration
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
            'status_name' => [
                'type' => 'VARCHAR',
                'constraint'     => "100",
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
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('statuses');
    }

    public function down()
    {
        $this->forge->dropTable('statuses');
    }
}
