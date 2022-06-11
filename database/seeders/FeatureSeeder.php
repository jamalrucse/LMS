<?php

namespace Database\Seeders;

use App\Models\Feature;
use Illuminate\Database\Seeder;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Feature::factory(4)->create();
        $features = [
            [
                'title' => 'Laravel Vuejs SPA',
                'slug' => 'laravel-vuejs-spa',
                'icon' => 'fas fa-code',
                'description' => 'Laravel Vuejs SPA is a full-stack web application framework for building modern web applications.'
            ],
            [
                'title' => 'SAAS Solution',
                'slug' => 'saas-solution',
                'icon' => 'fas fa-cloud',
                'description' => 'Software as a service (or SaaS) is a way of delivering applications over the Internet—as a service.',
            ],
            [
                'title' => 'Leave Management System',
                'slug' => 'leave-management-system',
                'icon' => 'fas fa-briefcase',
                'description' => 'Leave Management System is a web application that helps you to manage your leaves.',
            ],
            [
                'title' => 'Multiple Payment Methods',
                'slug' => 'multiple-payment-methods',
                'icon' => 'fas fa-credit-card',
                'description' => 'Multiple Payment Methods is a web application that helps you to manage your leaves.',
            ]
        ];

        foreach ($features as $feature) {
            Feature::create($feature);
        }
    }
}
