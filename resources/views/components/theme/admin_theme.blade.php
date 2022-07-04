@php
if (!session()->has('theme')) {
    session(['theme' => $theme]);
}

$theme = session('theme');

@endphp

<style>
    :root {
        --primary-color: #469498 !important;
        --hover-color: {{ $theme->hover_color }} !important;
        --secondary-color: {{ $theme->secondary_color }} !important;
        --success-color: {{ $theme->success_color }} !important;
        --info-color: {{ $theme->info_color }} !important;
        --warning-color: {{ $theme->warning_color }} !important;
        --danger-color: {{ $theme->danger_color }} !important;
    }
</style>
